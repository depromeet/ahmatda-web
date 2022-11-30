import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import IconChevron24pxRightLeft from '../icon/IconChevron24pxRightLeft';

interface Props {
  /**
   * 가운데에 표시될 텍스트
   */
  title?: string;
  /**
   * @type `ReactElement`
   *
   * 우측에 표시될 element
   */
  rightElement?: ReactElement;
  /**
   * 좌측 `chevron` 아이콘을 클릭 시 실행될 `VoidFunction`
   *
   * 값을 주입하지 않을 시 `router.back()`이 실행됩니다
   */
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
      {rightElement && <RightElementWrapper>{rightElement}</RightElementWrapper>}
    </Wrapper>
  );
};

export default AppBar;

const APP_BAR_HEIGHT = '48px';

const Wrapper = styled.section(
  {
    position: 'sticky',
    left: 0,
    top: '0',
    width: '100%',
    height: APP_BAR_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '900',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.white }),
);

const BackButton = styled.button({
  all: 'unset',
  position: 'absolute',
  // NOTE: - wapper padding + design padding
  left: 'calc(-20px + 8px)',
  cursor: 'pointer',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Title = styled.h2(({ theme }) => ({
  ...theme.typographies.subTitle,
  color: theme.colors.gray6,
}));

const RightElementWrapper = styled.div({
  position: 'absolute',
  // NOTE: - wapper padding + design padding
  right: 'calc(-20px + 8px)',
});
