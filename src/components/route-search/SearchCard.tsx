import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import ContainedButton from '../button/ContainedButton';
import CheckboxGroup from '../checkbox/CheckboxGroup';

interface Props extends ComponentProps<typeof CheckboxGroup> {
  onSubmit: VoidFunction;
}

const SearchCard = ({ title, options, onSubmit }: Props) => {
  return (
    <Wrapper>
      <CheckboxGroup title={title} options={options} />
      <ContainedButton onClick={onSubmit}>내 리스트에 추가하기</ContainedButton>
    </Wrapper>
  );
};

export default SearchCard;

const Wrapper = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 20px 16px 20px;
`;
