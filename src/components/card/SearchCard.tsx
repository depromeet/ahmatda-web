import { useState } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';

import ContainedButton from '../button/ContainedButton';
import Checkbox from '../checkbox/Checkbox';
import CheckboxWithText from '../checkbox/CheckboxWithText';

import useDidUpdate from '@/hooks/life-cycle/useDidUpdate';

type Option = {
  name: string;
  id: string;
  [key: string]: unknown;
};

type Props = {
  title: string;
  options: Option[];
};

const SearchCard = ({ title, options }: Props) => {
  const [selectAll, setSelectAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  const [isSelectedArr, setIsSelectedArr] = useState(_.times(options.length, _.constant(false)));
  const [count, setCount] = useState(0);

  useDidUpdate(() => {
    const cnt = _.filter(isSelectedArr, (item) => item === true).length;
    setCount(cnt);
    if (cnt === options.length) {
      setSelectAll(true);
      setIndeterminate(false);
      return;
    }
    setIndeterminate(true);
  }, [isSelectedArr]);

  useDidUpdate(() => {
    if (selectAll) {
      setIsSelectedArr(_.times(options.length, _.constant(true)));
      setIndeterminate(false);
      return;
    }
    setIsSelectedArr(_.times(options.length, _.constant(false)));
    setIndeterminate(false);
  }, [selectAll]);

  return (
    <Wrapper>
      <StyledHeader>
        <Title>{title}</Title>
        <Checkbox
          textLabel="전체 선택"
          checked={!indeterminate && selectAll}
          onToggle={() => {
            setSelectAll((prev) => !prev);
          }}
        />
      </StyledHeader>
      <Counter>{`${count}/${options.length}`}</Counter>
      <CheckboxGroup>
        {options.map(({ name, id }, idx) => (
          <CheckboxWithText
            key={id}
            checked={isSelectedArr[idx]}
            onToggle={() => {
              setIsSelectedArr((prev) => prev.map((item, i) => (i === idx ? !item : item)));
            }}
          >
            {name}
          </CheckboxWithText>
        ))}
      </CheckboxGroup>
      <ContainedButton>내 리스트에 추가하기</ContainedButton>
    </Wrapper>
  );
};

export default SearchCard;

const Wrapper = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 20px 16px 20px;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  ${({ theme }) => ({ ...theme.typographies.title2 })}
  color: ${({ theme }) => theme.colors.black};
`;

const Counter = styled.div`
  display: block;
  ${({ theme }) => ({ ...theme.typographies.caption2 })};
  color: #7a7a7a;
`;

const CheckboxGroup = styled.div`
  margin-block: 16px;
  height: 216px;
  overflow: auto;
  & > div {
    margin-top: 4px;
  }
  & > div:first-child {
    margin-top: 0;
  }
`;
