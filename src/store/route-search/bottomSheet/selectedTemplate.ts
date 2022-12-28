import { atom } from 'recoil';

import { RecTemplate, UserTemplate } from '../../../hooks/api/template/type';

const selectedTemplateState = atom<UserTemplate | RecTemplate | null>({
  key: 'selectedTemplateInBottomSheet',
  default: null,
});

export default selectedTemplateState;
