import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import ContainedButton from '@/components/button/ContainedButton';

const ButtonSection = ({ children }: ComponentProps<typeof ContainedButton>) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ButtonSection;

const Wrapper = styled.section(
  {
    width: '100%',
    height: '80px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    padding: '16px 20px',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.white }),
);
