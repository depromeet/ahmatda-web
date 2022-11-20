import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

interface Props {
  isShowing: boolean;
}

const PortalWrapper = ({ children, isShowing }: PropsWithChildren<Props>) => {
  const container = typeof window !== 'undefined' && document.body;

  return container
    ? createPortal(<AnimatePresence mode="wait">{isShowing && children}</AnimatePresence>, container)
    : null;
};

export default PortalWrapper;
