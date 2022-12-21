import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { RecTemplate } from './type';

import { get } from '@/lib/api';
import { currentRecCategoryInfo } from '@/store/route-search/currentRecCategory';

interface Response {
  result: RecTemplate[];
  // TODO: 실제 error 타입으로 변경
  error: any;
}

// TODO: 실제 API url로 변경
const getRecTemplates = () => get<Response>('');

const REC_TEMPLATES_QUERY_KEY = 'rec_templates';

const useGetRecTemplates = () => {
  const { currentRecCategoryId } = useRecoilValue(currentRecCategoryInfo);
  const query = useQuery({
    queryKey: [REC_TEMPLATES_QUERY_KEY, currentRecCategoryId],
    queryFn: getRecTemplates,
    enabled: Boolean(currentRecCategoryId),
  });

  return { ...query, data: MOCK.result };
};

export default useGetRecTemplates;

const MOCK: Response = {
  result: [
    {
      id: 100,
      templateName: '일상에서 중요한거',
      categoryId: 1,
      items: [
        {
          id: 1,
          templateId: 2,
          categoryId: 1,
          name: '노트북',
        },
        {
          id: 2,
          templateId: 2,
          categoryId: 1,
          name: '핸드폰',
        },
      ],
    },
    {
      id: 101,
      templateName: '운동에서 중요한거',
      categoryId: 1,
      items: [
        {
          id: 1,
          templateId: 2,
          categoryId: 1,
          name: '바벨',
        },
        {
          id: 2,
          templateId: 2,
          categoryId: 1,
          name: '꺾이지 않는 마음',
        },
      ],
    },
  ],
  error: null,
};
