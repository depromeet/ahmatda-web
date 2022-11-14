import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 12px;
  font-size: 1rem;
  text-align: center;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray3};
  }
`;
