import { ComponentProps, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { m, Variants } from 'framer-motion';

import PortalWrapper from './PortalWrapper';

import { defaultEasing, defaultFadeInVariants } from '@/constants/motions';
import usePreventScroll from '@/hooks/scroll/usePreventScroll';

interface Props extends ComponentProps<typeof PortalWrapper> {
  setToClose: VoidFunction;
}

const BottomSheet = ({ setToClose, children, isShowing }: Props) => {
  usePreventScroll(isShowing);

  const onClickScrim = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setToClose();
  };

  return (
    <PortalWrapper isShowing={isShowing}>
      <StyledMotionScrim
        onClick={onClickScrim}
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <StyledMotionContent variants={bottomSheetVariants}>{children}</StyledMotionContent>
      </StyledMotionScrim>
    </PortalWrapper>
  );
};

export default BottomSheet;

const StyledMotionScrim = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;

  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  overflow: hidden;
`;

const StyledMotionContent = styled(m.div)`
  position: absolute;
  top: 100%;
  width: 100%;
  min-height: 420px;

  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px 20px 0 0;
  z-index: 1000;
`;

const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
  animate: {
    y: '-100%',
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
  exit: {
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
};
