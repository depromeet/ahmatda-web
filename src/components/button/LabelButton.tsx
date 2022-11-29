import { ComponentProps } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from './Button';

interface Props extends ComponentProps<typeof Button> {
  /**
   * @type 'small' | 'large'
   *
   * @default 'small'
   */
  size?: 'small' | 'large';
}

const LabelButton = ({ children, size = 'small', ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledLabelButton size={size} {...rest}>
      {children}
    </StyledLabelButton>
  );
};

export default LabelButton;

type StyledLabelButtonProps = Required<Pick<Props, 'size'>>;

const StyledLabelButton = styled(Button)<StyledLabelButtonProps>`
  padding: 8px;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.gray3};
  display: flex;
  align-items: center;

  &:active {
    background-color: inherit;
  }

  &:disabled {
    background-color: inherit;
    color: ${({ theme }) => theme.colors.gray5};
  }

  ${({ size }) => size === 'small' && smallCss}
  ${({ size }) => size === 'large' && largeCss}
`;

const smallCss = css`
  font-size: 12px;
`;

const largeCss = css``;
