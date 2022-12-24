import { atom, selector } from 'recoil';

import { Category } from '@/hooks/api/category/type';

const currentRecCategoryState = atom<Category | null>({
  key: 'currentRecCategoryState',
  default: null,
});

export default currentRecCategoryState;

export const currentRecCategoryInfo = selector({
  key: 'currentRecCategoryInfo',
  get: ({ get }) => {
    const category = get(currentRecCategoryState);
    const currentRecCategoryName = category?.name;
    const currentRecCategoryId = category?.id;
    return {
      currentRecCategoryName,
      currentRecCategoryId,
    };
  },
});
