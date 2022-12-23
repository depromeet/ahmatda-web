import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { post } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';
import fcmTokenState from '@/store/push-notification/fcmToken';

interface sendFcmTokenRequest {
  fcmToken: string | null;
}

const useSendFcmToken = () => {
  const fcmToken = useRecoilValue(fcmTokenState);
  const userToken = useRecoilValue(userTokenState);

  const requestData: sendFcmTokenRequest = {
    fcmToken,
  };

  const sendCardItemMutation = useMutation(() => {
    return post('/user/token', requestData);
  });

  const { mutate } = sendCardItemMutation;

  useEffect(() => {
    if (fcmToken && userToken) {
      mutate();
    }
  }, [mutate, fcmToken, userToken]);
};

export default useSendFcmToken;
