import { atom } from 'recoil';

import { Category } from '../../../hooks/api/category/type';

const selectedCategoryState = atom<Category | null>({
  key: 'selectedCategoryInBottomSheet',
  default: null,
});

export default selectedCategoryState;
