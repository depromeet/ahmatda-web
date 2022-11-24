import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

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
}

const CheckboxGroup = ({ title, options }: CheckboxGroupProps) => {
  const [checkStatus, setCheckStatus] = useState<boolean[]>(new Array(options.length).fill(false));

  const toggleSingleCheckbox = (clikedIdx: number) => {
    setCheckStatus((prev) => prev.map((item, i) => (i === clikedIdx ? !item : item)));
  };

  const toggleCheckAllBtn = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckStatus((prev) => [...prev.fill(true)]);
      return;
    }
    setCheckStatus((prev) => [...prev.fill(false)]);
  };

  return (
    <>
      <StyledHeader>
        <Title>{title}</Title>
        <Checkbox
          textLabel="전체 선택"
          onToggle={toggleCheckAllBtn}
          checked={checkStatus.every((item) => !!item)}
          testId="check-all-btn"
        />
      </StyledHeader>
      <Counter>{`${checkStatus.filter((item) => item === true).length}/${options.length}`}</Counter>
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
    </>
  );
};

export default CheckboxGroup;

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
