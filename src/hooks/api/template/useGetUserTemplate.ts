import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { Category } from '../category/type';

import { UserTemplate } from './type';

import { get } from '@/lib/api';
import currentCategoryState from '@/store/route-home/currentCategory';

export interface Response {
  result: UserTemplate[];
}

const getUserTemplate = (categoryId: number) => get<Response>(`/template/user?category=${categoryId}`);

export const USER_TEMPLATE_QUERY_KEY = 'user_template';

const useGetUserTemplate = () => {
  const currentCategory = useRecoilValue(currentCategoryState);

  const query = useQuery({
    queryKey: [USER_TEMPLATE_QUERY_KEY, currentCategory?.id],
    queryFn: () => getUserTemplate((currentCategory as Category).id),
    enabled: Boolean(currentCategory),
  });

  return { ...query, data: query.data?.result };
};

export default useGetUserTemplate;
