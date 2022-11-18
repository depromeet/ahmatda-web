import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import IconChevron24pxRightLeft from '../icon/IconChevron24pxRightLeft';

interface Props {
  title?: string;
  rightElement?: ReactElement;
  onClickBackButton?: VoidFunction;
}

const AppBar: FC<Props> = ({ title, rightElement, onClickBackButton }) => {
  const router = useRouter();

  const handleBackButton = () => {
    if (onClickBackButton) {
      onClickBackButton();
      return;
    }
    router.back();
  };

  return (
    <Wrapper>
      <BackButton onClick={handleBackButton}>
        <IconChevron24pxRightLeft direction="left" />
      </BackButton>
      {title && <Title>{title}</Title>}
      {rightElement && rightElement}
    </Wrapper>
  );
};

export default AppBar;

const Wrapper = styled.section(
  {
    position: 'sticky',
    top: '0',
    width: '100%',
    height: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 4px',
    zIndex: '900',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.white }),
);

const BackButton = styled.button({
  all: 'unset',
  cursor: 'pointer',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled.h2(
  {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  ({ theme }) => ({
    ...theme.typographies.subTitle,
  }),
);
