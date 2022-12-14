import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { Category } from '../category/type';
import { USER_CATEGORY_QUERY_KEY } from '../category/useGetUserCategories';

import { RecTemplate, UserTemplate } from './type';
import { REC_TEMPLATES_QUERY_KEY } from './useGetRecTemplates';

import recordEvent from '@/lib/analytics/record';
import { post } from '@/lib/api';
import selectedCategoryState from '@/store/route-search/bottomSheet/selectedCategory';
import selectedTemplateState from '@/store/route-search/bottomSheet/selectedTemplate';
import selectedRecItemsState from '@/store/route-search/selectedRecItems';

const useAppendToMyTemplate = () => {
  const selectedItems = useRecoilValue(selectedRecItemsState);
  const selectedCategory = useRecoilValue(selectedCategoryState);
  const selectedTemplate = useRecoilValue(selectedTemplateState);

  const queryClient = useQueryClient();

  const appendToMyTemplate = () => {
    let requestData;

    if ('isRecCategory' in selectedCategory!) {
      // NOTE: 새로운 카테고리, 새로운 템플릿에 추가
      recordEvent({
        action: '추천 템플릿 사용',
        category: '새로운 카테고리, 새로운 템플릿',
        value: `${selectedCategory.name} ${selectedTemplate?.templateName}`,
      });
      requestData = recTemplateToNewCategoryData(selectedCategory, selectedTemplate, selectedItems);
    } else if ('userToken' in selectedTemplate!) {
      // NOTE: 기존 카테고리, 기존 템플릿에 추가
      recordEvent({
        action: '추천 템플릿 사용',
        category: '기존 카테고리, 기존 템플릿',
        value: selectedTemplate?.templateName,
      });
      requestData = recItemToUserTemplateData(selectedTemplate, selectedItems);
    } else {
      // NOTE: 기존 카테고리, 새로운 템플릿에 추가
      recordEvent({
        action: '추천 템플릿 사용',
        category: '기존 카테고리, 새로운 템플릿',
        value: selectedTemplate?.templateName,
      });
      requestData = recTemplateToUserCategoryData(selectedCategory, selectedTemplate, selectedItems);
    }

    return post('/recommend', requestData);
  };

  const appendToMyTemplateMutation = useMutation(appendToMyTemplate, {
    onSuccess: () => {
      queryClient.invalidateQueries([USER_CATEGORY_QUERY_KEY]);
      queryClient.refetchQueries([REC_TEMPLATES_QUERY_KEY]);
    },
  });

  return { appendToMyTemplateMutation };
};

export default useAppendToMyTemplate;

interface CreateTemplateRequest {
  templateName: string;
  userCategoryId: number;
  items: string[];
}

interface TemplateAddItemsRequest {
  userCategoryId: number;
  userTemplateId: number;
  items: string[];
}

interface CreateAllRequest {
  categoryRequest: Omit<Category, 'id'>;
  createTemplateRequest: {
    templateName: string;
    items: string[];
  };
}

interface RecTemplateToNewCategory {
  createAllRequest: CreateAllRequest;
  createTemplateRequest: null;
  templateAddItemsRequest: null;
}

interface RecItemToUserTemplate {
  createAllRequest: null;
  createTemplateRequest: null;
  templateAddItemsRequest: TemplateAddItemsRequest;
}

interface RecTemplateToUserCategory {
  createAllRequest: null;
  createTemplateRequest: CreateTemplateRequest;
  templateAddItemsRequest: null;
}

const recTemplateToNewCategoryData = (
  selectedCategory: Category | null,
  selectedTemplate: RecTemplate | null,
  selectedItems: string[] | null,
): RecTemplateToNewCategory => {
  if (!selectedCategory || !selectedTemplate || !selectedItems) {
    throw new Error('');
  }

  return {
    createAllRequest: {
      categoryRequest: {
        name: selectedCategory.name,
        type: selectedCategory.type,
        emoji: selectedCategory.emoji,
      },
      createTemplateRequest: {
        templateName: selectedTemplate.templateName,
        items: selectedItems,
      },
    },
    createTemplateRequest: null,
    templateAddItemsRequest: null,
  };
};

const recItemToUserTemplateData = (
  selectedTemplate: UserTemplate | null,
  selectedItems: string[] | null,
): RecItemToUserTemplate => {
  if (!selectedTemplate || !selectedItems) {
    throw new Error('');
  }

  return {
    createAllRequest: null,
    createTemplateRequest: null,
    templateAddItemsRequest: {
      userCategoryId: selectedTemplate.categoryId,
      userTemplateId: selectedTemplate.id,
      items: selectedItems,
    },
  };
};

const recTemplateToUserCategoryData = (
  selectedCategory: Category | null,
  selectedTemplate: RecTemplate | null,
  selectedItems: string[] | null,
): RecTemplateToUserCategory => {
  if (!selectedCategory || !selectedTemplate || !selectedItems) {
    throw new Error('');
  }

  return {
    createAllRequest: null,
    createTemplateRequest: {
      templateName: selectedTemplate.templateName,
      userCategoryId: selectedCategory.id,
      items: selectedItems,
    },
    templateAddItemsRequest: null,
  };
};
