import { atom, selector } from 'recoil';

import { RecTemplate } from '@/hooks/api/template/type';

const selectedRecTemplateState = atom<RecTemplate | null>({
  key: 'selectedRecTemplateState',
  default: null,
});

export default selectedRecTemplateState;

export const selectedRecTemplateInfo = selector({
  key: 'selectedRecTemplateInfo',
  get: ({ get }) => {
    const template = get(selectedRecTemplateState);
    const selectedRecTemplateName = template?.templateName;
    return {
      selectedRecTemplateName,
    };
  },
});
