import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { RecTemplate } from './type';

import { get } from '@/lib/api';
import currentRecCategoryState from '@/store/route-search/currentRecCategory';

interface Response {
  result: RecTemplate[];
}

const getRecTemplates = (categoryId?: number) => get<Response>(`/recommend/templates?category=${categoryId}`);

const REC_TEMPLATES_QUERY_KEY = 'rec_templates';

const useGetRecTemplates = () => {
  const currentRecCategory = useRecoilValue(currentRecCategoryState);
  const currentRecCategoryId = currentRecCategory?.id;
  const query = useQuery({
    queryKey: [REC_TEMPLATES_QUERY_KEY, currentRecCategoryId],
    queryFn: () => getRecTemplates(currentRecCategoryId),
    enabled: Boolean(currentRecCategoryId),
  });

  return { ...query, data: query.data?.result };
};

export default useGetRecTemplates;
