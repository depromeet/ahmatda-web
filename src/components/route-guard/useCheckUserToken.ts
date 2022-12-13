import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { get } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';

type UserTokenStatus = 'REGISTERED' | 'UNREGISTERED';

interface UserTokenResponse {
  result: UserTokenStatus;
  error: string | null;
}

const useCheckUserToken = () => {
  const userToken = useRecoilValue(userTokenState);
  const [isTokenRegistered, setIsTokenRegistered] = useState<boolean>(false);

  useEffect(() => {
    const whenUnregistered = () => {
      setIsTokenRegistered(false);
    };

    const whenRegistered = () => {
      setIsTokenRegistered(true);
    };

    const getUserTokenStatus = async () => {
      const res = await get<UserTokenResponse>(`/user?userToken=${userToken}`);
      return res.result;
    };

    const checkUserTokenStatus = async () => {
      if (userToken === null) {
        whenUnregistered();
        return;
      }

      const status = await getUserTokenStatus();

      if (status === 'REGISTERED') {
        whenRegistered();
      } else {
        whenUnregistered();
      }
    };

    checkUserTokenStatus();
  }, [userToken]);

  return { isTokenRegistered };
};

export default useCheckUserToken;
