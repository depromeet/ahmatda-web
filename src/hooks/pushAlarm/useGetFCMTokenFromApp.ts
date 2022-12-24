import { useSetRecoilState } from 'recoil';

import useListeningAppMessage from '../bridge/useListeningAppMessage';

import fcmTokenState from '@/store/push-notification/fcmToken';

const useGetFCMTokenFromApp = () => {
  const setFcmToken = useSetRecoilState(fcmTokenState);
  useListeningAppMessage({
    targetType: 'FCM_TOKEN',
    handler: ({ data }) => {
      setFcmToken(data as string);
    },
  });
};

export default useGetFCMTokenFromApp;
