import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
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
  /**
   * `BottomSheet`등에서 layout에 구애받지 않고 사용될 때 사용합니다
   *
   * `position`이 `absolute`가 되며, `ScrollableDiv`를 렌더링합니다
   */
  isAbsolute?: boolean;
}

const AppBar: FC<Props> = ({ title, rightElement, onClickBackButton, isAbsolute = false }) => {
  const router = useRouter();

  const handleBackButton = () => {
    if (onClickBackButton) {
      onClickBackButton();
      return;
    }
    router.back();
  };

  return (
    <>
      <Wrapper isAbsolute={isAbsolute}>
        <BackButton onClick={handleBackButton}>
          <IconChevron24pxRightLeft direction="left" />
        </BackButton>
        {title && <Title>{title}</Title>}
        {rightElement && rightElement}
      </Wrapper>
      {isAbsolute && <ScrollableDiv />}
    </>
  );
};

export default AppBar;

const APP_BAR_HEIGHT = '48px';

const Wrapper = styled.section<{ isAbsolute: boolean }>(
  {
    position: 'sticky',
    left: 0,
    top: '0',
    width: '100%',
    height: APP_BAR_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 4px',
    zIndex: '900',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.white }),
  ({ isAbsolute }) => isAbsolute && AbsoluteCss,
);

const AbsoluteCss = css({
  position: 'absolute',
  top: '0',
  left: '0',
  marginTop: '16px',
});

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
    color: theme.colors.gray6,
  }),
);

const ScrollableDiv = styled.div({ height: APP_BAR_HEIGHT });
