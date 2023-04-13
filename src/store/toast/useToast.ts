import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import toastState, { ToastWithoutId } from './toastState';

interface FireToast extends ToastWithoutId {
  duration?: number;
}

const DEFAULT_DURATION = 1500;

const useToast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const removeToast = useCallback((id: string) => {
    setToast((prev) => {
      if (!prev) return null;
      if (prev.id === id) return null;
      return prev;
    });
  }, []);

  const fireToast = useCallback(({ content, duration = DEFAULT_DURATION, iconElement }: FireToast) => {
    const id = new Date().getTime().toString();
    setToast({ id, content, iconElement });
    setTimeout(() => removeToast(id), duration);
  }, []);

  return { toast, fireToast };
};

export default useToast;
