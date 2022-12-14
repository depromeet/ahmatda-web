import { atom } from 'recoil';

import { Category } from '@/hooks/api/category/type';

const selectedRecCategoryState = atom<Category | null>({
  key: 'selectedRecCategoryState',
  default: null,
});

export default selectedRecCategoryState;
