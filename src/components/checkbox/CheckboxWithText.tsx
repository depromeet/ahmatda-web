import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import Checkbox from './Checkbox';

type Props = Omit<ComponentProps<typeof Checkbox>, 'textLabel'>;

const CheckboxWithText = ({ children, ...rest }: Props) => {
  return (
    <Wrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
