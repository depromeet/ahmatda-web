import { ComponentProps, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { m, Variants } from 'framer-motion';

import PortalWrapper from './PortalWrapper';
import StyledMotionScrim from './StyledMotionScrim';

import { defaultEasing, defaultFadeInVariants } from '@/constants/motions';
import usePreventScroll from '@/hooks/scroll/usePreventScroll';

interface Props extends ComponentProps<typeof PortalWrapper> {
  setToClose: VoidFunction;
}

const SideMenu = ({ setToClose, children, isShowing }: Props) => {
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
        <StyledMotionContent variants={sideMenuVariants}>{children}</StyledMotionContent>
      </StyledMotionScrim>
    </PortalWrapper>
  );
};

export default SideMenu;

const StyledMotionContent = styled(m.aside)(
  {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '85vw',
    height: '100vh',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
  }),
);

const sideMenuVariants: Variants = {
  initial: {
    x: '100%',
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
  animate: {
    x: '0',
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
  exit: {
    x: '100%',
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
};
