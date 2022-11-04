import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useAppMessageListener from './useAppMessageListener';

describe('useAppMessageListener', () => {
  const mockHandler = jest.fn();
  // TODO: 이후 추가, 삭제되는 상수에 따라 적용
  const mockProp: Parameters<typeof useAppMessageListener>[0] = {
    targetType: 'foo',
    handler: mockHandler,
  };

  beforeEach(() => {
    Object.defineProperty(window, 'ReactNativeWebView', {
      value: { postMessage: undefined },
      writable: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('startListening과 stopListening을 반환해야 한다', () => {
    const {
      result: {
        current: { startListening, stopListening },
      },
    } = renderHook(() => useAppMessageListener(mockProp));

    expect(startListening).toBeDefined();
    expect(stopListening).toBeDefined();
  });

  it('startListening 시 document와 window에 addEventListenr가 실행되어야 한다', () => {
    const documentAddEventListener = jest.spyOn(document, 'addEventListener');
    const windowAddEventListener = jest.spyOn(window, 'addEventListener');

    const {
      result: {
        current: { startListening },
      },
    } = renderHook(() => useAppMessageListener(mockProp));

    startListening();

    expect(documentAddEventListener).toBeCalled();
    expect(windowAddEventListener).toBeCalled();
  });

  it('stopListening 시 document와 window에 removeEventListener가 실행되어야 한다', () => {
    const documentRemoveEventListener = jest.spyOn(document, 'removeEventListener');
    const windowRemoveEventListener = jest.spyOn(window, 'removeEventListener');

    const {
      result: {
        current: { stopListening },
      },
    } = renderHook(() => useAppMessageListener(mockProp));

    stopListening();

    expect(documentRemoveEventListener).toBeCalled();
    expect(windowRemoveEventListener).toBeCalled();
  });

  it('targetType이 아닌 message 이벤트는 handler가 실행되면 안된다', () => {
    const {
      result: {
        current: { startListening },
      },
    } = renderHook(() => useAppMessageListener(mockProp));

    startListening();

    const invalidTargetData = { type: 'not target type', data: 'foo' };
    const stringifiedData = JSON.stringify(invalidTargetData);

    fireEvent(window, new MessageEvent('message', { data: stringifiedData }));
    expect(mockHandler).not.toBeCalled();
  });

  it('targetType이 같은 message 이벤트는 handler가 실행된다', () => {
    const {
      result: {
        current: { startListening },
      },
    } = renderHook(() => useAppMessageListener(mockProp));

    startListening();

    const validTargetData = { type: mockProp.targetType, data: 'foo' };
    const stringifiedData = JSON.stringify(validTargetData);

    fireEvent(window, new MessageEvent('message', { data: stringifiedData }));
    expect(mockHandler).toBeCalled();
    expect(mockHandler).toBeCalledWith({ ...validTargetData, rest: {} });
  });
});
