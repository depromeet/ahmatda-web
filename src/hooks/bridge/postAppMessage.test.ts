import postAppMessage from './postAppMessage';

describe('postAppMessage', () => {
  const mockPostMessage = jest.fn();

  beforeEach(() => {
    Object.defineProperty(global, 'window', {
      value: { ReactNativeWebView: { postMessage: mockPostMessage } },
      writable: true,
    });
  });

  afterEach(() => {
    Object.defineProperty(global, 'window', { value: { ...window }, writable: true });
  });

  it('window가 undefined일 시 실행되면 안된다.', () => {
    Object.defineProperty(global, 'window', { value: undefined, writable: true });
    expect(window).toBeUndefined();

    const result = postAppMessage({ type: 'baz', data: 'dd' });
    expect(result).toBeUndefined();
  });

  it('window가 undefined가 아닐시 postMessage가 호출되어야 한다', () => {
    expect(window).not.toBeUndefined();
    // TODO: 이후 추가, 삭제되는 상수에 따라 적용
    const obj = { type: 'baz', data: 'test' } as const;

    postAppMessage(obj);
    expect(mockPostMessage).toBeCalled();
  });

  it('postMessage가 호출될 때 상수의 value 값으로, 문자열로 호출되어야 한다', () => {
    // TODO: 이후 추가, 삭제되는 상수에 따라 적용
    const obj = { type: 'baz', data: 'test' } as const;
    const correctObject = { type: 'baz', data: 'test' };

    postAppMessage(obj);
    expect(mockPostMessage).toBeCalledWith(JSON.stringify(correctObject));
  });
});
