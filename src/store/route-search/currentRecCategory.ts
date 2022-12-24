import { atom } from 'recoil';

import { Category } from '@/hooks/api/category/type';

const currentRecCategoryState = atom<Category | null>({
  key: 'currentRecCategoryState',
  default: null,
});

export default currentRecCategoryState;
