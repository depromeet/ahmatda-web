import { atom } from 'recoil';

import { RecTemplate } from '@/hooks/api/template/type';

const selectedRecTemplateState = atom<RecTemplate | null>({
  key: 'selectedRecTemplateState',
  default: null,
});

export default selectedRecTemplateState;
