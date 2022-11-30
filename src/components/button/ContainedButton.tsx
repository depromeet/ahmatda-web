import { ComponentProps } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from './Button';

interface Props extends ComponentProps<typeof Button> {
  /**
   * @type 'medium' | 'large'
   *
   * @default 'medium'
   */
  size?: 'medium' | 'large';
}

const ContainedButton = ({ children, size = 'medium', ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledContainedButton size={size} {...rest}>
      {children}
    </StyledContainedButton>
  );
};

export default ContainedButton;

type StyledContainedButtonProps = Required<Pick<Props, 'size'>>;

const StyledContainedButton = styled(Button)<StyledContainedButtonProps>`
  width: 100%;
  ${({ theme }) => ({ ...theme.typographies.button2 })}
  ${({ size }) => size === 'medium' && mediumCss}
  ${({ size }) => size === 'large' && largeCss}
`;

const mediumCss = css`
  padding: 8px 0;
`;

const largeCss = css`
  padding: 12px 0;
`;
