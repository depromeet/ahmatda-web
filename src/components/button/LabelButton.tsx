import { ComponentProps } from 'react';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import Button from './Button';

type Size = 'small' | 'large';
interface Props extends ComponentProps<typeof Button> {
  /**
   * @type 'small' | 'large'
   *
   * @default 'small'
   */
  size?: Size;
  /**
   * icon과 함께 사용할 경우를 뜻합니다
   *
   * 색상이 `gray3`이 됩니다
   *
   * @default `false`
   */
  withIcon?: boolean;
}

const LabelButton = ({ children, size = 'small', withIcon = false, ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledLabelButton size={size} withIcon={withIcon} {...rest}>
      {children}
    </StyledLabelButton>
  );
};

export default LabelButton;

interface StyledLabelButtonProps {
  size: Size;
  withIcon: boolean;
}

const StyledLabelButton = styled(Button)<StyledLabelButtonProps>`
  padding: 8px;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.gray5};
  display: flex;
  align-items: center;

  &:active {
    background-color: inherit;
  }

  &:disabled {
    background-color: inherit;
    color: ${({ theme }) => theme.colors.gray3};
  }

  ${({ size }) => size === 'small' && smallCss}
  ${({ theme, withIcon }) => withIcon && withIconCss(theme)}
`;

const smallCss = css`
  font-size: 12px;
`;

const withIconCss = (theme: Theme) => css`
  color: ${theme.colors.gray3};
`;
