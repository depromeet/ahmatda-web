import { useQuery } from '@tanstack/react-query';

import { Category } from './type';

import { get } from '@/lib/api';

interface Response {
  result: Category[];
}

const getCategories = () => get<Response>('/category/user');

const CATEGORY_QUERY_KEY = 'category';

const useGetCategories = () => {
  const query = useQuery({ queryKey: [CATEGORY_QUERY_KEY], queryFn: getCategories });

  return { ...query, data: query.data?.result };
};

export default useGetCategories;
