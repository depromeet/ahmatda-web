import { POST_WEBVIEW_MESSAGE_TYPE } from './constants';
import { PostAppMessageData } from './type';

/**
 * `Web`에서 `App`으로 데이터를 전송합니다.
 */
const postAppMessage = ({ type, data, ...rest }: PostAppMessageData) => {
  if (!window.ReactNativeWebView) return;

  const typeValue = POST_WEBVIEW_MESSAGE_TYPE[type];
  window.ReactNativeWebView.postMessage(JSON.stringify({ type: typeValue, data, ...rest }));
};

export default postAppMessage;
