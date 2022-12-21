import { useSetRecoilState } from 'recoil';

import useListeningAppMessage from '../bridge/useListeningAppMessage';

import fcmTokenState from '@/store/pushAlarm/fcmToken';

const useGetFCMTokenFromApp = () => {
  const setFCMToken = useSetRecoilState(fcmTokenState);

  useListeningAppMessage({
    targetType: 'FCM_TOKEN',
    handler: ({ data }) => {
      setFCMToken(data as string);
      // eslint-disable-next-line no-console
      console.log('FCM token from app', data);
    },
  });
};

export default useGetFCMTokenFromApp;
