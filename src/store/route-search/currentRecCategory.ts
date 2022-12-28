import { atom } from 'recoil';

import { Category } from '@/hooks/api/category/type';

const currentRecCategoryState = atom<Category | null>({
  key: 'currentRecCategoryState',
  default: null,
});

export default currentRecCategoryState;

export const currentRecCategoryWithFlag = selector({
  key: 'currentRecCategoryWithFlag',
  get: ({ get }) => {
    const category = get(currentRecCategoryState);
    const categoryWithFlag = { ...category, isRecCategory: true } as Category;
    return categoryWithFlag;
  },
});
