import { ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, m, Variants } from 'framer-motion';

import GraphicAppleWatch from '../graphic/GraphicAppleWatch';
import GraphicCard from '../graphic/GraphicCard';
import GraphicCharger from '../graphic/GraphicCharger';
import GraphicHandBag from '../graphic/GraphicHandbag';
import GraphicHeadphones from '../graphic/GraphicHeadphones';
import GraphicKey from '../graphic/GraphicKey';
import GraphicWallet from '../graphic/GraphicWallet';

import { defaultEasing } from '@/constants/motions';

const animationElements: ReactNode[] = [
  <GraphicCard key="card" isAct size={40} />,
  <GraphicAppleWatch key="applewatch" isAct size={40} />,
  <GraphicHandBag key="handbag" isAct size={40} />,
  <GraphicCharger key="charger" isAct size={40} />,
  <GraphicWallet key="wallet" isAct size={40} />,
  <GraphicKey key="key" isAct size={40} />,
  <GraphicHeadphones key="headphones" isAct size={40} />,
];

const GRAPHIC_DURATION = 1000;

const Spinner = () => {
  const [animationIndex, setAnimationIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % animationElements.length);
    }, GRAPHIC_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper variants={wrapperVariants} initial="initial" animate="animate" exit="exit">
      <Background>
        <AnimatePresence mode="sync">
          <ElementWrapper
            key={animationIndex}
            variants={elementVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {animationElements[animationIndex]}
          </ElementWrapper>
        </AnimatePresence>
      </Background>
    </Wrapper>
  );
};

export default Spinner;

const Wrapper = styled(m.div)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const Background = styled.div(
  {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.gray2 }),
);

const ElementWrapper = styled(m.div)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const wrapperVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: defaultEasing },
    transformOrigin: 'center',
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: defaultEasing },
    transformOrigin: 'center',
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: defaultEasing },
    transformOrigin: 'center',
  },
};

const elementVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.4,
    transition: { duration: 0.3, ease: defaultEasing },
    transformOrigin: 'center',
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: defaultEasing },
    transformOrigin: 'center',
  },
  exit: {
    opacity: 0,
    scale: 0.4,
    transition: { duration: 0.3, ease: defaultEasing },
    transformOrigin: 'center',
  },
};
