import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { post } from '@/lib/api';
import userTokenState from '@/store/localStorage/userToken';

type UserTemplate = {
  category: 'DAILY' | 'EXERCISE' | 'TRAVEL';
  templateName: string;
  items: string[];
};

interface UserOnboardingRequest {
  onboardingRequest: UserTemplate;
}

interface UserOnboardingResponse {
  result: string;
  error: string;
}

const useUserOnboardMutaion = () => {
  const setUserToken = useSetRecoilState(userTokenState);

  const createUserMutation = useMutation(
    ({ category, templateName, items }: UserTemplate): Promise<UserOnboardingResponse> => {
      const requestData: UserOnboardingRequest = {
        onboardingRequest: {
          category,
          templateName,
          items,
        },
      };

      return post('/user', requestData);
    },
    {
      onSuccess: (data: UserOnboardingResponse) => {
        setUserToken(data.result);
      },
    },
  );

  return { createUserMutation };
};

export default useUserOnboardMutaion;
