import { ComponentProps, FC, useState } from 'react';
import styled from '@emotion/styled';

import CategoryIconRadioFieldset from './CategoryIconRadioFieldset';
import CategoryRadioFieldset from './CategoryRadioFieldset';
import { CategoryType } from './type';

import LabelButton from '@/components/button/LabelButton';
import AppBar from '@/components/navigation/AppBar';
import BottomSheet from '@/components/portal/BottomSheet';
import Dialog from '@/components/portal/Dialog';
import TextField from '@/components/text-field/TextField';
import useInput from '@/hooks/common/useInput';
import useToggle from '@/hooks/common/useToggle';

interface Props extends Omit<ComponentProps<typeof BottomSheet>, 'children'> {
  // TODO: 카테고리 아이템 인터페이스
  name: string;
  category: CategoryType;
  icon: string;
}

const CategoryEditBottomSheet: FC<Props> = ({ isShowing, setToClose, name, category, icon }) => {
  const {
    value: categoryName,
    onChange: onChangeCategoryName,
    debouncedValue: debouncedCategoryName,
  } = useInput({ initialValue: name, useDebounce: true });

  const [currentCategory, setCurrentCategory] = useState<CategoryType>(category);

  const [currentIcon, setCurrentIcon] = useState<string | null>(icon);

  const isSubmitDisabled = debouncedCategoryName.length === 0 || currentIcon === null;

  const { isShowingDeleteDialog, toggleIsShowingDeleteDialog, onCategoryDelete } = useDeleteDialog({
    setToCloseBottomSheet: setToClose,
  });

  return (
    <>
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

          <DeleteButton onClick={toggleIsShowingDeleteDialog}>카테고리 삭제하기</DeleteButton>
        </Wrapper>
      </BottomSheet>

      <Dialog
        isShowing={isShowingDeleteDialog}
        setToClose={toggleIsShowingDeleteDialog}
        content={
          <>
            <Dialog.ContentTitle>카테고리를 삭제할까요?</Dialog.ContentTitle>
            <Dialog.ContentBody>삭제 후에는 복구가 어려워요.</Dialog.ContentBody>
          </>
        }
        leftButton={<Dialog.Button onClick={toggleIsShowingDeleteDialog}>아니요</Dialog.Button>}
        rightButton={<Dialog.WarningButton onClick={onCategoryDelete}>삭제하기</Dialog.WarningButton>}
      />
    </>
  );
};

export default CategoryEditBottomSheet;

const Wrapper = styled.div({ height: '100vh' });

const Form = styled.form({
  marginTop: '.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const DeleteButton = styled.button(
  {
    all: 'unset',
    cursor: 'pointer',
    marginTop: '1.25rem',
  },
  ({ theme }) => ({ ...theme.typographies.body1, color: theme.colors.danger }),
);

const useDeleteDialog = ({ setToCloseBottomSheet }: { setToCloseBottomSheet: VoidFunction }) => {
  const [isShowingDeleteDialog, _, toggleIsShowingDeleteDialog] = useToggle(false);

  const onCategoryDelete = () => {
    // TODO: API Mutate
    // eslint-disable-next-line no-console
    console.log('delete category');
    toggleIsShowingDeleteDialog();
    setToCloseBottomSheet();
  };

  return { isShowingDeleteDialog, toggleIsShowingDeleteDialog, onCategoryDelete };
};
