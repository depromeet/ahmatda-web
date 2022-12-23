import { useQuery } from '@tanstack/react-query';

import { Category } from './type';

import { get } from '@/lib/api';

interface Response {
  result: Category[];
}

const getRecCategories = () => get<Response>('/recommend/category');

const REC_CATEGORIES_QUERY_KEY = 'rec_categories';

const useGetRecCategories = () => {
  const query = useQuery({ queryKey: [REC_CATEGORIES_QUERY_KEY], queryFn: getRecCategories });
  return { ...query, data: query.data?.result };
};

export default useGetRecCategories;
