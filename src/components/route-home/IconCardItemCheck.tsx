import React, { FC } from 'react';
import { useTheme } from '@emotion/react';
import { AnimatePresence, m, Variants } from 'framer-motion';

import { defaultEasing } from '@/constants/motions';

interface Props {
  isChecked: boolean;
  isImportant: boolean;
}

const IconCardItemCheck: FC<Props> = ({ isChecked, isImportant }) => {
  const theme = useTheme();

  return (
    <AnimatePresence mode="wait">
      {isChecked ? (
        <m.svg
          key="checked"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <m.rect x="2" y="2" width="20" height="20" rx="10" fill="white" variants={opacityVariants} custom={1} />
          <m.path
            d="M8 12.1277L10.6861 14.8139L16 9.5"
            stroke="#212121"
            strokeWidth="2.91971"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawVariants}
          />
          <m.path
            d="M10.6859 14.8139L15.9997 9.5"
            stroke="#FF6C3E"
            strokeWidth="2.91971"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawVariants}
          />
        </m.svg>
      ) : (
        <m.svg
          key="unchecked"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="white"
            style={{ opacity: isImportant ? 0.5 : 1, transition: 'opacity 0.3s' }}
          />
          <m.path
            d="M10.7 10.7002L13.3861 13.3863"
            stroke={isImportant ? theme.colors.secondary : theme.colors.gray1}
            strokeWidth="2.91971"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={drawVariants}
          />
        </m.svg>
      )}
    </AnimatePresence>
  );
};

export default IconCardItemCheck;

const drawVariants: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: defaultEasing },
  },
  exit: {
    pathLength: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
  },
};

const opacityVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
  },
  animate: (op) => ({
    opacity: op,
    transition: { duration: 0.3, ease: defaultEasing },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
  },
};
