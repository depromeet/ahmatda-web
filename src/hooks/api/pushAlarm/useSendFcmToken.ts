import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { post, replaceUserTokenToInstance } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';
import fcmTokenState from '@/store/push-notification/fcmToken';

const useSendFcmToken = () => {
  const fcmToken = useRecoilValue(fcmTokenState);
  const userToken = useRecoilValue(userTokenState);

  const sendFcmTokenMutation = useMutation((token: string) => {
    return post(`/user/token`, { fcmToken: token });
  });

  const { mutate } = sendFcmTokenMutation;

  useEffect(() => {
    if (userToken) {
      replaceUserTokenToInstance(userToken);
    }

    if (fcmToken && userToken) {
      mutate(fcmToken);
    }
  }, [mutate, fcmToken, userToken]);
};

export default useSendFcmToken;
