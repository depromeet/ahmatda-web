import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { get } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';
import fcmTokenState from '@/store/push-notification/fcmToken';

const useSendFcmToken = () => {
  const fcmToken = useRecoilValue(fcmTokenState);
  const userToken = useRecoilValue(userTokenState);

  const sendFcmTokenMutation = useMutation(() => {
    return get(`/alarm?token=${fcmToken}`);
  });

  const { mutate } = sendFcmTokenMutation;

  useEffect(() => {
    if (fcmToken && userToken) {
      mutate();
    }
  }, [mutate, fcmToken, userToken]);
};

export default useSendFcmToken;
