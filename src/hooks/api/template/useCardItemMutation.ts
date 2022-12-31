import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { Response as UserTemplateResponse, USER_TEMPLATE_QUERY_KEY } from './useGetUserTemplate';

import { del, patch, post } from '@/lib/api';
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

interface editCardItemProps {
  itemId: number;
  modifiedItemName: string;
  important: boolean;
}

interface editCardItemRequest extends editCardItemProps {
  templateId: number;
}

interface editCardItemTakeProps {
  itemId: number;
  isTake: boolean;
}

interface editCardItemTakeRequest extends editCardItemTakeProps {
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

  const editCardItemMutation = useMutation({
    mutationFn: (editedCardItem: editCardItemProps) => {
      if (!currentTemplate) throw new Error('');

      const requestData: editCardItemRequest = {
        ...editedCardItem,
        templateId: currentTemplate.id,
      };

      return patch('/template/item', requestData);
    },
    onSuccess: () => {
      invalidateCurrentUserTemplate();
    },
  });

  const editCardItemTakeMutation = useMutation({
    mutationFn: (toggledCardItem: editCardItemTakeProps) => {
      if (!currentTemplate) throw new Error('');

      const requestData: editCardItemTakeRequest = {
        ...toggledCardItem,
        templateId: currentTemplate.id,
      };

      return patch('/template/item', requestData);
    },
    onMutate: async (editedCardItem) => {
      await queryClient.cancelQueries([USER_TEMPLATE_QUERY_KEY, currentCategory?.id]);

      const prevUserTemplate = queryClient.getQueryData([USER_TEMPLATE_QUERY_KEY, currentCategory?.id]);

      queryClient.setQueryData<UserTemplateResponse>([USER_TEMPLATE_QUERY_KEY, currentCategory?.id], (old) => {
        if (typeof old === 'undefined') return undefined;

        const eachTemplates = old.result;
        const updatedTemplates = eachTemplates.map((template) => {
          const updatedItems = template.items.map((item) => {
            if (item.id === editedCardItem.itemId)
              return {
                ...item,
                take: editedCardItem.isTake,
              };
            return item;
          });

          return { ...template, items: updatedItems };
        });

        return { result: [...updatedTemplates] };
      });

      return prevUserTemplate;
    },
  });

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

  return { createCardItemMutation, editCardItemMutation, editCardItemTakeMutation, deleteCardItemMutation };
};

export default useCardItemMutation;
