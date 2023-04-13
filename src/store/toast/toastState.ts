import { ReactElement } from 'react';
import { atom } from 'recoil';

interface Toast {
  id: string;
  content: string;
  iconElement?: ReactElement;
}

export type ToastWithoutId = Omit<Toast, 'id'>;

const toastState = atom<Toast | null>({
  key: 'toastState',
  default: null,
});

export default toastState;
