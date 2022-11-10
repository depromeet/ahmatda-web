import { PostAppMessageData } from './type';

/**
 * `Web`에서 `App`으로 데이터를 전송합니다.
 */
const postAppMessage = ({ type, data, ...rest }: PostAppMessageData) => {
  if (!window?.ReactNativeWebView) return;

  window.ReactNativeWebView.postMessage(JSON.stringify({ type, data, ...rest }));
};

export default postAppMessage;
