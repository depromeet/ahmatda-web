import { atom } from 'recoil';

/**
 * 선택된 추천 아이템들의 이름만을 저장
 */

const selectedRecItemsState = atom<string[] | null>({
  key: 'selectedRecItemsState',
  default: null,
});

export default selectedRecItemsState;
