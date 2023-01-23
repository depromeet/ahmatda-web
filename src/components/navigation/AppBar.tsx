import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import IconCancel from '../icon/IconCancel';
import IconChevron24pxRightLeft from '../icon/IconChevron24pxRightLeft';

interface Props {
  backButtonType?: 'chevron' | 'cancel';
  /**
   * 가운데에 표시될 텍스트
   *
   * @default 'chevron'
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
   * 배경 색상
   *
   * @default 'white'
   */
  backgroundColorType?: 'white' | 'gray';
}

const AppBar: FC<Props> = ({
  backButtonType = 'chevron',
  title,
  rightElement,
  onClickBackButton,
  backgroundColorType = 'white',
}) => {
  const router = useRouter();

  const handleBackButton = () => {
    if (onClickBackButton) {
      onClickBackButton();
      return;
    }
    router.back();
  };

  return (
    <Wrapper backgroundColorType={backgroundColorType}>
      <BackButton onClick={handleBackButton}>
        {backButtonType === 'chevron' ? <IconChevron24pxRightLeft direction="left" /> : <IconCancel />}
      </BackButton>
      {title && <Title>{title}</Title>}
      {rightElement && <RightElementWrapper>{rightElement}</RightElementWrapper>}
    </Wrapper>
  );
};

export default AppBar;

const APP_BAR_HEIGHT = '48px';

const Wrapper = styled.section<{ backgroundColorType: Props['backgroundColorType'] }>(
  {
    position: 'sticky',
    left: '0',
    top: '0',
    width: 'calc(100% + 20px * 2)',
    marginLeft: '-20px',
    height: APP_BAR_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '900',
  },
  ({ theme, backgroundColorType }) => ({
    backgroundColor: backgroundColorType === 'white' ? theme.colors.white : theme.colors.gray1,
  }),
);

const BackButton = styled.button({
  all: 'unset',
  position: 'absolute',
  left: '4px',
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
  right: '8px',
});
