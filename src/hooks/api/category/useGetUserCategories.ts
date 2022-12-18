import { useQuery } from '@tanstack/react-query';

import { Category } from './type';

import { get } from '@/lib/api';

interface Response {
  result: Category[];
}

const getCategories = () => get<Response>('/category/user');

export const USER_CATEGORY_QUERY_KEY = 'user_category';

const useGetUserCategories = () => {
  const query = useQuery({ queryKey: [USER_CATEGORY_QUERY_KEY], queryFn: getCategories });

  return { ...query, data: query.data?.result };
};

export default useGetUserCategories;
