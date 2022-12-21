import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import useAppMessageListener from '../bridge/useAppMessageListener';

import fcmTokenState from '@/store/pushAlarm/fcmToken';

const useGetFCMTokenFromApp = () => {
  const setFCMToken = useSetRecoilState(fcmTokenState);
  const { startListening, stopListening } = useAppMessageListener({
    targetType: 'FCM_TOKEN',
    handler: ({ data }) => {
      setFCMToken(data as string);
      // eslint-disable-next-line no-console
      console.log('FCM token from app', data);
    },
  });

  useEffect(() => {
    startListening();
    return () => {
      stopListening();
    };
  }, []);
};

export default useGetFCMTokenFromApp;
