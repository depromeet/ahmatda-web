import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { USER_TEMPLATE_QUERY_KEY } from './useGetUserTemplate';

import { del, patch, post } from '@/lib/api';
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

interface EditUserTemplateProps {
  templateId: number;
  templateName: string;
  pin: boolean;
}

interface EditUserTemplateRequest extends EditUserTemplateProps {
  categoryId: number;
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
      if (!currentCategory) throw new Error('카테고리 선택 후 생성해 주세요.');

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

  const editUserTemplateMutation = useMutation(
    (editUserTemplate: EditUserTemplateProps) => {
      if (!currentCategory) throw new Error('카테고리 선택 후 수정해 주세요.');

      const requestData: EditUserTemplateRequest = { ...editUserTemplate, categoryId: currentCategory.id };

      return patch('/template', requestData);
    },
    {
      onSuccess: () => {
        resetCurrentUserTemplate();
      },
    },
  );

  const deleteUserTemplateMutation = useMutation((id: number) => del(`/template/${id}`), {
    onSuccess: () => {
      resetCurrentUserTemplate();
    },
  });

  return { createUserTemplateMutation, editUserTemplateMutation, deleteUserTemplateMutation };
};

export default useUserTemplateMutation;
