import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { LISTENLING_WEBVIEW_MESSAGE_KEY } from './type';
import useListeningAppMessage from './useListeningAppMessage';

describe('useListeningAppMessage', () => {
  const targetType: LISTENLING_WEBVIEW_MESSAGE_KEY = 'foo';
  const AFTER_MESSAGE_TEXT = 'correct';

  const App = () => {
    const [state, setState] = useState<boolean>(false);
    useListeningAppMessage({ targetType, handler: () => setState(true) });

    return <div>{state && AFTER_MESSAGE_TEXT}</div>;
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

  it('마운트 시 addEventListener가 실행되어야 한다', () => {
    jest.spyOn(document, 'addEventListener').mockImplementation();
    jest.spyOn(window, 'addEventListener').mockImplementation();
    render(<App />);

    expect(document.addEventListener).toBeCalled();
    expect(window.addEventListener).toBeCalled();
  });

  it('message 이벤트 발생 시 AFTER_MESSAGE_TEXT가 렌더링되어야 한다', () => {
    render(<App />);

    const validTargetData = { type: targetType, data: 'foo' };
    const stringifiedData = JSON.stringify(validTargetData);

    fireEvent(window, new MessageEvent('message', { data: stringifiedData }));

    expect(screen.getByText(AFTER_MESSAGE_TEXT)).toBeInTheDocument();
  });

  it('언마운트 시 removeEventListener가 실행되어야 한다', () => {
    jest.spyOn(document, 'removeEventListener').mockImplementation();
    jest.spyOn(window, 'removeEventListener').mockImplementation();
    const { unmount } = render(<App />);
    unmount();

    expect(document.removeEventListener).toBeCalled();
    expect(window.removeEventListener).toBeCalled();
  });
});
