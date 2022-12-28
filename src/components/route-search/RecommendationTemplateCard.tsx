import { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useSetRecoilState } from 'recoil';

import ContainedButton from '../button/ContainedButton';
import Checkbox from '../checkbox/Checkbox';
import CheckboxWithText from '../checkbox/CheckboxWithText';

import { RecTemplate } from '@/hooks/api/template/type';
import selectedRecItemsState from '@/store/route-search/selectedRecItems';
import selectedRecTemplateState from '@/store/route-search/selectedRecTemplate';

export interface Props {
  data: RecTemplate;
  submitBtnTitle?: string;
  onSubmit?: VoidFunction;
  isRefetchingTemplateData: boolean;
}

const RecommendationTemplateCard = ({ data, submitBtnTitle, onSubmit, isRefetchingTemplateData }: Props) => {
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

  const computeCheckedItemsNames = () => {
    return items.filter(({ id }) => checkedId.has(id)).map(({ name }) => name);
  };

  const resetCheckedId = () => {
    setCheckedId(new Set());
  };

  const [selectedTemplate, setSelectedTemplate] = useRecoilState(selectedRecTemplateState);
  const setSelectedItems = useSetRecoilState(selectedRecItemsState);

  const onSubmitBtnClick = () => {
    onSubmit?.();

    setSelectedTemplate(data);

    const checkedItemsNames = computeCheckedItemsNames();
    setSelectedItems(checkedItemsNames);
  };

  useEffect(() => {
    if (selectedTemplate?.id === templateId) {
      resetCheckedId();
    }
  }, [isRefetchingTemplateData]);

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
      {onSubmit && submitBtnTitle && (
        <ContainedButton onClick={onSubmitBtnClick} disabled={checkedId.size === 0}>
          {submitBtnTitle}
        </ContainedButton>
      )}
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
