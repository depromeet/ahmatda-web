import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Response as UserTemplateResponse, USER_TEMPLATE_QUERY_KEY } from '../api/template/useGetUserTemplate';

import currentCategoryState from '@/store/route-home/currentCategory';
import currentUserTemplateState from '@/store/route-home/currentUserTemplate';

const useCurrentUserTemplate = () => {
  const currentCategory = useRecoilValue(currentCategoryState);
  const setCurrentUserTemplate = useSetRecoilState(currentUserTemplateState);

  const queryClient = useQueryClient();

  const userTemplates = queryClient.getQueryData<UserTemplateResponse>([USER_TEMPLATE_QUERY_KEY, currentCategory?.id]);

  const onCarouselIndexChange = (index: number) => {
    if (!userTemplates) return;

    setCurrentUserTemplate(userTemplates.result[index] ?? null);
  };

  return { onCarouselIndexChange };
};

export default useCurrentUserTemplate;
