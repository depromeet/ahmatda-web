import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

import ContainedButton from '../button/ContainedButton';
import Checkbox from '../checkbox/Checkbox';
import CheckboxWithText from '../checkbox/CheckboxWithText';

import { RecTemplate } from '@/hooks/api/template/type';

export interface Props {
  data: RecTemplate;
  submitBtnTitle?: string;
  onSubmit?: VoidFunction;
}

const RecommendationTemplateCard = ({ data, submitBtnTitle, onSubmit }: Props) => {
  const { id: templateId, templateName, items } = data;
  const [checkedId, setCheckedId] = useState(new Set());

  const numCheckedItems = checkedId.size;

  const toggleSingleCheckbox = (clickedId: number) => {
    const updatedCheckedId = new Set(checkedId);
    if (updatedCheckedId.has(clickedId)) {
      updatedCheckedId.delete(clickedId);
    } else {
      updatedCheckedId.add(clickedId);
    }

    setCheckedId(updatedCheckedId);
  };

  const toggleCheckAllBtn = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedId(new Set(items.map((item) => item.id)));
      return;
    }
    setCheckedId(new Set());
  };

  return (
    <Wrapper>
      <StyledHeader>
        <Title>{templateName}</Title>
        <Checkbox textLabel="전체 선택" onToggle={toggleCheckAllBtn} checked={numCheckedItems === items.length} />
      </StyledHeader>
      <Counter>{`${numCheckedItems}/${items.length}`}개</Counter>
      <CheckboxList>
        {items.map(({ name, id }) => (
          <CheckboxWithText
            key={`rec-item-${templateId}-${id}`}
            checked={checkedId.has(id)}
            onToggle={() => {
              toggleSingleCheckbox(id);
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

export default RecommendationTemplateCard;

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
  & > div:first-of-type {
    margin-top: 0;
  }
`;
