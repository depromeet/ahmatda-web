import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

import ContainedButton from '../button/ContainedButton';

import Checkbox from './Checkbox';
import CheckboxWithText from './CheckboxWithText';

interface Option {
  name: string;
  id: string;
  [key: string]: unknown;
}

export interface CheckboxGroupProps {
  title: string;
  options: Option[];
  submitBtnTitle?: string;
  onSubmit?: VoidFunction;
}

const CheckboxGroup = ({ title, options, submitBtnTitle, onSubmit }: CheckboxGroupProps) => {
  const [checkStatus, setCheckStatus] = useState<boolean[]>(new Array(options.length).fill(false));

  const toggleSingleCheckbox = (clikedIdx: number) => {
    setCheckStatus((prev) => prev.map((item, i) => (i === clikedIdx ? !item : item)));
  };

  const toggleCheckAllBtn = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckStatus((prev) => [...prev.fill(e.target.checked)]);
  };

  return (
    <Wrapper>
      <StyledHeader>
        <Title>{title}</Title>
        <Checkbox
          textLabel="전체 선택"
          onToggle={toggleCheckAllBtn}
          checked={checkStatus.every((item) => !!item)}
          testId="check-all-btn"
        />
      </StyledHeader>
      <Counter>{`${checkStatus.filter((item) => item === true).length}/${options.length}`}개</Counter>
      <CheckboxList>
        {options.map(({ name, id }, idx) => (
          <CheckboxWithText
            key={id}
            checked={checkStatus[idx]}
            onToggle={() => {
              toggleSingleCheckbox(idx);
            }}
            testId="single-check-btn"
          >
            {name}
          </CheckboxWithText>
        ))}
      </CheckboxList>
      {onSubmit && submitBtnTitle && <ContainedButton onClick={onSubmit}>{submitBtnTitle}</ContainedButton>}
    </Wrapper>
  );
};

export default CheckboxGroup;

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

const CheckboxList = styled.div`
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
