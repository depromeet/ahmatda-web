import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { Category } from '../category/type';

import { get } from '@/lib/api';
import currentCategoryState from '@/store/route-home/currentCategory';

interface Response {
  items: string[];
}

const HOME_RECOMMEND_ITEM_QUERY_KEY = 'home_recommend_item';

const getRecommendItem = (categoryId: Category['id']) =>
  get<ApiResponse<Response>>(`/recommend/items?category=${categoryId}`);

const useGetRecommendItem = () => {
  const currentCategory = useRecoilValue(currentCategoryState);

  const query = useQuery({
    queryKey: [HOME_RECOMMEND_ITEM_QUERY_KEY, currentCategory?.id],
    queryFn: () => getRecommendItem((currentCategory as Category).id),
    enabled: Boolean(currentCategory),
  });

  return { ...query, data: query.data?.result };
};

export default useGetRecommendItem;
