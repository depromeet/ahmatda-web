import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { get } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';

type UserTokenStatus = 'REGISTERED' | 'UNREGISTERED';

interface UserTokenResponse {
  result: UserTokenStatus;
  error: string | null;
}

/**
 * `userTokenState`를 기준으로
 *
 * @returns `{ isTokenRegistered, isLoading }`
 * 로딩 중인 상태와 등록된 토큰인 지 반환합니다
 */
const useCheckUserToken = () => {
  const userToken = useRecoilValue(userTokenState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isTokenRegistered, setIsTokenRegistered] = useState<boolean>(false);

  useEffect(() => {
    const whenUnregistered = () => {
      setIsTokenRegistered(false);
      setIsLoading(false);
    };

    const whenRegistered = () => {
      setIsTokenRegistered(true);
      setIsLoading(false);
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

  return { isTokenRegistered, isLoading };
};

export default useCheckUserToken;
