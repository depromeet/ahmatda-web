import { ReactNode } from 'react';

import useSendFcmToken from '@/hooks/api/pushAlarm/useSendFcmToken';
import useGetFCMTokenFromApp from '@/hooks/pushAlarm/useGetFCMTokenFromApp';

interface FcmTokenHandlerProps {
  children: ReactNode;
}

const FcmTokenHandler = ({ children }: FcmTokenHandlerProps) => {
  useGetFCMTokenFromApp();
  useSendFcmToken();

  return <>{children}</>;
};

export default FcmTokenHandler;
