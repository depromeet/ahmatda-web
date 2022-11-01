import { useEffect } from 'react';

import useAppMessageListener from './useAppMessageListener';

type UseAppMessageParameters = Parameters<typeof useAppMessageListener>;

/**
 * mount시 `App`에서 `Web`으로 전송되는 데이터를 리스닝하고,
 * will-unmount시 리스닝을 중지합니다.
 *
 * @params
 * `useAppMessageListener`와 동일한 props를 갖습니다.
 */
const useListeningAppMessage = ([{ targetType, handler }]: UseAppMessageParameters) => {
  const { startListening, stopListening } = useAppMessageListener({ targetType, handler });

  useEffect(() => {
    startListening();

    return () => {
      stopListening();
    };
  });
};

export default useListeningAppMessage;
