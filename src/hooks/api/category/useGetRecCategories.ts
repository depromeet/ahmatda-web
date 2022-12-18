import { useQuery } from '@tanstack/react-query';

import { Category } from './type';

import { get } from '@/lib/api';

interface Response {
  result: Category[];
}

// TODO: 실제 API url로 변경
const getRecCategories = () => get<Response>('');

const REC_CATEGORIES_QUERY_KEY = 'rec_categories';

const useGetRecCategories = () => {
  const query = useQuery({ queryKey: [REC_CATEGORIES_QUERY_KEY], queryFn: getRecCategories });
  return { ...query, data: MOCK.result };
};

export default useGetRecCategories;

const MOCK: {
  result: Category[];
  error: null;
} = {
  result: [
    {
      id: 1,
      name: '일상',
      type: 'DAILY',
      emoji: 'GYM',
    },
    {
      id: 2,
      name: '운동',
      type: 'TRAVEL',
      emoji: 'PLANE',
    },
  ],
  error: null,
};
