import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { Category } from '../category/type';

import { UserTemplate } from './type';

import { get } from '@/lib/api';
import selectedCategoryState from '@/store/route-search/bottomSheet/selectedCategory';

interface Response {
  result: UserTemplate[];
  error?: {
    code: string;
    message: string;
    detail: string | null;
  };
}

const getUserTemplate = async (selectedCategory: Category | null) => {
  if ('isRecCategory' in selectedCategory!) {
    return Promise.resolve(null);
  }

  const res = await get<Response>(`/template/user?category=${selectedCategory?.id}`);
  if (res.error !== null && res.error?.code !== 'TEMPLATE_NOT_FOUND') {
    throw new Error('');
  }

  return res;
};

const USER_TEMPLATE_QUERY_KEY = 'search_tab_user_template';

const useGetUserTemplatesInSearchTab = () => {
  const selectedCategory = useRecoilValue(selectedCategoryState);

  const query = useQuery({
    queryKey: [USER_TEMPLATE_QUERY_KEY, selectedCategory],
    queryFn: () => getUserTemplate(selectedCategory),
    enabled: Boolean(selectedCategory),
  });

  return { ...query, data: query.data?.result };
};

export default useGetUserTemplatesInSearchTab;
