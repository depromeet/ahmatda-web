import { atom } from 'recoil';

import { Category } from '@/hooks/api/category/type';

const currentCategoryState = atom<Category | null>({
  key: 'currentCategoryState',
  default: null,
});

export default currentCategoryState;
