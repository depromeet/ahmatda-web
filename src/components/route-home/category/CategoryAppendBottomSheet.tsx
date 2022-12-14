import { ComponentProps, FC, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../../button/LabelButton';
import AppBar from '../../navigation/AppBar';
import BottomSheet from '../../portal/BottomSheet';
import TextField from '../../text-field/TextField';

import CategoryIconRadioFieldset from './CategoryIconRadioFieldset';
import CategoryRadioFieldset from './CategoryRadioFieldset';

import { CategoryKind } from '@/hooks/api/category/type';
import useInput from '@/hooks/common/useInput';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const CategoryAppendBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const {
    value: categoryName,
    onChange: onChangeCategoryName,
    debouncedValue: debouncedCategoryName,
  } = useInput({ initialValue: '', useDebounce: true });

  const [currentCategory, setCurrentCategory] = useState<CategoryKind>('DAILY');

  const [currentIcon, setCurrentIcon] = useState<string | null>(null);

  const isSubmitDisabled = debouncedCategoryName.length === 0 || currentIcon === null;

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <Wrapper>
        <AppBar
          backButtonType="cancel"
          title="카테고리 추가"
          onClickBackButton={setToClose}
          rightElement={
            <LabelButton size="large" disabled={isSubmitDisabled}>
              완료
            </LabelButton>
          }
        />
        <Form>
          <TextField value={categoryName} onChange={onChangeCategoryName} placeholder="카테고리 입력" />

          <CategoryRadioFieldset currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
          <CategoryIconRadioFieldset currentValue={currentIcon} setCurrentValue={setCurrentIcon} />
        </Form>
      </Wrapper>
    </BottomSheet>
  );
};

export default CategoryAppendBottomSheet;

const Wrapper = styled.div({ height: '100vh' });

const Form = styled.form({
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});
