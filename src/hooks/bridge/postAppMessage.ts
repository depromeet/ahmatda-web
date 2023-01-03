import { PostAppMessageData } from './type';

/**
 * `Web`에서 `App`으로 데이터를 전송합니다.
 */
const postAppMessage = <T>({ type, data, ...rest }: PostAppMessageData<T>) => {
  if (!window?.ReactNativeWebView) return;

  window.ReactNativeWebView.postMessage(JSON.stringify({ type, data, ...rest }));
};

export default postAppMessage;
