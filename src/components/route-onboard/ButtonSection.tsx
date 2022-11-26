import { ComponentProps, useEffect } from 'react';
import styled from '@emotion/styled';

import ContainedButton from '@/components/button/ContainedButton';

const ButtonSection = ({ children }: ComponentProps<typeof ContainedButton>) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.backgroundColor = '#fff';
  }, []);

  return (
    <>
      <Wrapper>{children}</Wrapper>
      <ScrollableDiv />
    </>
  );
};

export default ButtonSection;

const HEIGHT = '80px';

const Wrapper = styled.section(
  {
    width: '100%',
    height: HEIGHT,
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    padding: '16px 20px',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.white }),
);

const ScrollableDiv = styled.div({ height: HEIGHT, appearance: 'none' });
