import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import Checkbox from './Checkbox';

type Props = ComponentProps<typeof Checkbox>;

const CheckboxWithText = ({ children, ...rest }: Props) => {
  return (
    <Wrapper>
      <Checkbox {...rest} />
      <TextWrapper>{children}</TextWrapper>
    </Wrapper>
  );
};

export default CheckboxWithText;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  ${({ theme }) => ({ ...theme.typographies.body1 })};
  color: ${({ theme }) => theme.colors.gray6};
  margin-left: 4px;
`;
