import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { USER_TEMPLATE_QUERY_KEY } from './useGetUserTemplate';

import { post } from '@/lib/api';
import currentCategoryState from '@/store/route-home/currentCategory';

interface CreateUserTemplateProps {
  templateName: string;
  items: string[];
}

interface CreateUserTemplateRequest {
  templateName: string;
  categoryId: number;
  items: {
    categoryId: number;
    name: string;
  }[];
}

const useUserTemplateMutation = () => {
  const queryClient = useQueryClient();

  const currentCategory = useRecoilValue(currentCategoryState);

  const resetCurrentUserTemplate = () => {
    if (!currentCategory) return;

    queryClient.resetQueries([USER_TEMPLATE_QUERY_KEY, currentCategory.id]);
  };

  const createUserTemplateMutation = useMutation(
    (newUserTemplate: CreateUserTemplateProps) => {
      if (!currentCategory) throw new Error('카테고리');

      const requestData: CreateUserTemplateRequest = {
        templateName: newUserTemplate.templateName,
        categoryId: currentCategory.id,
        items: newUserTemplate.items.map((eachItem) => ({ categoryId: currentCategory.id, name: eachItem })),
      };

      return post('/template', requestData);
    },
    {
      onSuccess: () => {
        resetCurrentUserTemplate();
      },
    },
  );

  return { createUserTemplateMutation };
};

export default useUserTemplateMutation;
