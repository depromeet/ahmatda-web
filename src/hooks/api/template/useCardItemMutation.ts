import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { USER_TEMPLATE_QUERY_KEY } from './useGetUserTemplate';

import { del, post } from '@/lib/api';
import currentCategoryState from '@/store/route-home/currentCategory';
import currentUserTemplateState from '@/store/route-home/currentUserTemplate';

interface createCardItemProps {
  itemName: string;
  important: boolean;
}

interface createCardItemRequest extends createCardItemProps {
  categoryId: number;
  templateId: number;
}

interface deleteCardItemProps {
  itemId: number;
}

interface deleteCardItemRequest extends deleteCardItemProps {
  templateId: number;
}

const useCardItemMutation = () => {
  const queryClient = useQueryClient();

  const currentCategory = useRecoilValue(currentCategoryState);
  const currentTemplate = useRecoilValue(currentUserTemplateState);

  const invalidateCurrentUserTemplate = () => {
    queryClient.invalidateQueries([USER_TEMPLATE_QUERY_KEY, currentCategory?.id]);
  };

  const createCardItemMutation = useMutation(
    ({ itemName, important }: createCardItemProps) => {
      if (!currentCategory) throw new Error('');
      if (!currentTemplate) throw new Error('');

      const requestData: createCardItemRequest = {
        itemName,
        important,
        categoryId: currentCategory.id,
        templateId: currentTemplate.id,
      };

      return post('/template/item', requestData);
    },
    {
      onSuccess: () => {
        invalidateCurrentUserTemplate();
      },
    },
  );

  const deleteCardItemMutation = useMutation(
    ({ itemId }: deleteCardItemProps) => {
      if (!currentTemplate) throw new Error('');

      const requestData: deleteCardItemRequest = {
        itemId,
        templateId: currentTemplate.id,
      };

      return del(`/template/item`, { data: requestData });
    },
    {
      onSuccess: () => {
        invalidateCurrentUserTemplate();
      },
    },
  );

  return { createCardItemMutation, deleteCardItemMutation };
};

export default useCardItemMutation;
