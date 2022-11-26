import { ComponentProps, MouseEvent, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { m } from 'framer-motion';

import PortalWrapper from './PortalWrapper';
import StyledMotionScrim from './StyledMotionScrim';

import { defaultFadeInUpVariants, defaultFadeInVariants } from '@/constants/motions';
import usePreventScroll from '@/hooks/scroll/usePreventScroll';

type PortalWrapperPropsWithoutChildren = Omit<ComponentProps<typeof PortalWrapper>, 'children'>;

interface Props extends PortalWrapperPropsWithoutChildren {
  /**
   * Dialog를 안보이게 할 callback
   */
  setToClose: VoidFunction;
  /**
   * 상단 영역에 들어갈 ReactNode
   *
   * wrapper에 flex, column center, gap 8px이 적용돼 있어요
   *
   * 기본적인 스타일은 `Dialog.ContentTitle`, `Dialog.ContentBody`를 사용할 수 있어요
   */
  content: ReactNode;
  /**
   * 하단 왼쪽에 들어갈 버튼
   *
   * 기본적인 스타일은 `Dialog.Button`, `Dialog.WarningButton`을 사용할 수 있어요
   */
  leftButton: ReactElement;
  /**
   * 하단 오른쪽에 들어갈 버튼
   *
   * 기본적인 스타일은 `Dialog.Button`, `Dialog.WarningButton`을 사용할 수 있어요
   */
  rightButton: ReactElement;
}

/**
 * @example
 *```tsx
  <Dialog
      isShowing={isShowing}
      setToClose={close}
      content={
        <>
          <Dialog.ContentTitle>진짜 닫을거?</Dialog.ContentTitle>
          <Dialog.ContentBody>어쩌구 저쩌구</Dialog.ContentBody>
        </>
      }
      leftButton={<Dialog.Button onClick={close}>닫기</Dialog.Button>}
      rightButton={<Dialog.WarningButton onClick={close}>진짜 닫기</Dialog.WarningButton>}
  />
 *```
 */
const Dialog = ({ setToClose, isShowing, content, leftButton, rightButton }: Props) => {
  usePreventScroll(isShowing);

  const onClickScrim = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setToClose();
  };

  return (
    <PortalWrapper isShowing={isShowing}>
      <Scrim onClick={onClickScrim} variants={defaultFadeInVariants} initial="initial" animate="animate" exit="exit">
        <MotionWrapper variants={defaultFadeInUpVariants}>
          <ContentWrapper>{content}</ContentWrapper>
          <ButtonWrapper>
            {leftButton}
            <HorizontalDivider />
            {rightButton}
          </ButtonWrapper>
        </MotionWrapper>
      </Scrim>
    </PortalWrapper>
  );
};

const Scrim = styled(StyledMotionScrim)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const MotionWrapper = styled(m.div)(
  {
    width: '17.5rem',
    borderRadius: '16px',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
  }),
);

const ContentWrapper = styled.div(
  {
    width: '100%',
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  },
  ({ theme }) => ({ borderBottom: `1px solid ${theme.colors.gray2}` }),
);

const ButtonWrapper = styled.div({
  width: '100%',
  height: '56px',
  display: 'flex',
});

const HorizontalDivider = styled.span(
  {
    height: '100%',
    width: '1px',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.gray2 }),
);

const EmptyButtonCss = css({
  all: 'unset',
  cursor: 'pointer',
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Button = styled.button(
  {
    ...EmptyButtonCss,
  },
  ({ theme }) => ({ ...theme.typographies.button2, color: theme.colors.gray4 }),
);

const WarningButton = styled.button({ ...EmptyButtonCss }, ({ theme }) => ({
  ...theme.typographies.button2,
  color: theme.colors.danger,
}));

const ContentTitle = styled.span(({ theme }) => ({ ...theme.typographies.subTitle, color: theme.colors.gray6 }));

const ContentBody = styled.span(({ theme }) => ({ ...theme.typographies.body1, color: theme.colors.gray4 }));

Dialog.ContentTitle = ContentTitle;
Dialog.ContentBody = ContentBody;
Dialog.Button = Button;
Dialog.WarningButton = WarningButton;

export default Dialog;
