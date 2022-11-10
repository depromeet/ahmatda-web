import { useCallback } from 'react';

import { ListeningAppMessageData, LISTENLING_WEBVIEW_MESSAGE_KEY } from './type';

interface Props {
  targetType: LISTENLING_WEBVIEW_MESSAGE_KEY;
  handler: ({ type, data, ...rest }: ListeningAppMessageData) => void;
}

/**
 * `App`에서 `Web`으로 전송되는 데이터를 읽는 리스너를 시작, 중지할 수 있습니다.
 */
const useAppMessageListener = ({ targetType, handler }: Props) => {
  const listener = useCallback(
    ({ data: rawData }: MessageEvent) => {
      const { type, data, ...rest } = JSON.parse(rawData) as ListeningAppMessageData;

      if (targetType !== type) return;
      handler({ type, data, rest });
    },
    [targetType, handler],
  );

  const startListening = () => {
    if (!window.ReactNativeWebView) return;

    document.addEventListener('message', listener as () => void); // android
    window.addEventListener('message', listener); // ios
  };

  const stopListening = () => {
    if (!window.ReactNativeWebView) return;

    document.removeEventListener('message', listener as () => void); // android
    window.removeEventListener('message', listener); // ios
  };

  return { startListening, stopListening };
};

export default useAppMessageListener;
