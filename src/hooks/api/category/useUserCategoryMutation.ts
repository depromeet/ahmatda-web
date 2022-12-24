import { useMutation, useQueryClient } from '@tanstack/react-query';
import omit from 'lodash/omit';

import { Category } from './type';
import { USER_CATEGORY_QUERY_KEY } from './useGetUserCategories';

import { del, patch, post } from '@/lib/api';

const useUserCategoryMutation = () => {
  const queryClient = useQueryClient();

  const resetUserCategories = () => {
    queryClient.resetQueries([USER_CATEGORY_QUERY_KEY]);
  };

  const createUserCategoryMutation = useMutation((category: Omit<Category, 'id'>) => post('/category', category), {
    onSuccess: () => {
      resetUserCategories();
    },
  });

  const editUserCategoryMutation = useMutation(
    (category: Category) => {
      const categoryOmittedId = omit(category, 'id');
      return patch(`/category/${category.id}`, categoryOmittedId);
    },
    {
      onSuccess: () => {
        resetUserCategories();
      },
    },
  );

  const deleteUserCategoryMutation = useMutation((id: number) => del(`/category/${id}`), {
    onSuccess: () => {
      resetUserCategories();
    },
  });

  return { createUserCategoryMutation, editUserCategoryMutation, deleteUserCategoryMutation };
};

export default useUserCategoryMutation;
