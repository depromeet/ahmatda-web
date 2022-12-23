import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { post } from '@/lib/api';
import fcmTokenState from '@/store/localStorage/fcmToken';

interface sendFcmTokenRequest {
  fcmToken: string;
}

const useSendFcmToken = () => {
  const fcmToken = useRecoilValue(fcmTokenState);
  if (!fcmToken) {
    throw new Error('fcm token reception failed');
  }
  const requestData: sendFcmTokenRequest = {
    fcmToken,
  };

  const sendCardItemMutation = useMutation(() => {
    return post('/user/token', requestData);
  });

  const { mutate } = sendCardItemMutation;

  useEffect(() => {
    mutate();
  }, [mutate]);
};

export default useSendFcmToken;
