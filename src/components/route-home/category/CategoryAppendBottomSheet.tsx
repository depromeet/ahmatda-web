import { ComponentProps, FC, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../../button/LabelButton';
import AppBar from '../../navigation/AppBar';
import BottomSheet from '../../portal/BottomSheet';
import TextField from '../../text-field/TextField';

import CategoryIconRadioFieldset from './CategoryIconRadioGroup';
import CategoryRadioFieldset from './CategoryRadioGroup';

import { Graphic } from '@/components/graphic/type';
import { CategoryKind } from '@/hooks/api/category/type';
import useUserCategoryMutation from '@/hooks/api/category/useUserCategoryMutation';
import useInput from '@/hooks/common/useInput';
import recordEvent from '@/lib/analytics/record';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const CategoryAppendBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const {
    value: categoryName,
    setValue: setCategoryName,
    onChange: onChangeCategoryName,
    debouncedValue: debouncedCategoryName,
  } = useInput({ initialValue: '', useDebounce: true });

  const [currentCategory, setCurrentCategory] = useState<CategoryKind>('DAILY');

  const [currentIcon, setCurrentIcon] = useState<Graphic | null>(null);

  const isSubmitDisabled = debouncedCategoryName.length === 0 || currentIcon === null;

  const { createUserCategoryMutation } = useUserCategoryMutation();

  const clearInputs = () => {
    setCategoryName('');
    setCurrentCategory('DAILY');
    setCurrentIcon(null);
  };

  const onClickSubmit = () => {
    if (!currentIcon) return;

    createUserCategoryMutation.mutate(
      { name: categoryName, type: currentCategory, emoji: currentIcon },
      {
        onSuccess: () => {
          setToClose();
          clearInputs();
          recordEvent({
            action: '사용자 카테고리 추가',
            value: { name: categoryName, type: currentCategory, icon: currentIcon },
          });
        },
      },
    );
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <Wrapper>
        <AppBar
          backButtonType="cancel"
          title="카테고리 추가"
          onClickBackButton={setToClose}
          rightElement={
            <LabelButton size="large" disabled={isSubmitDisabled} onClick={onClickSubmit}>
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
