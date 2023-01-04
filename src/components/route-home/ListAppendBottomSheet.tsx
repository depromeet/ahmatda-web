import { ChangeEvent, ComponentProps, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';
import EditableTag from '../tag/EditableTag';
import TextField from '../text-field/TextField';

import useUserTemplateMutation from '@/hooks/api/template/useUserTemplateMutation';
import useInput from '@/hooks/common/useInput';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const ListAppendBottomSheet = ({ isShowing, setToClose }: Props) => {
  const {
    value: listName,
    onChange: onListNameChange,
    debouncedValue: debouncedListName,
  } = useInput({ initialValue: '', useDebounce: true });

  const isSubmitDisabled = debouncedListName.length === 0;

  const { items, onChangeItem, appendEmptyItem, deleteWithIndex } = useItemList();

  const { createUserTemplateMutation } = useUserTemplateMutation();

  const onSubmit = () => {
    createUserTemplateMutation.mutate(
      { templateName: debouncedListName, items },
      {
        onSuccess: () => {
          setToClose();
        },
      },
    );
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <AppBar
        backButtonType="cancel"
        onClickBackButton={setToClose}
        title="리스트 추가"
        rightElement={
          <LabelButton size="large" disabled={isSubmitDisabled} onClick={onSubmit}>
            완료
          </LabelButton>
        }
      />

      <TextFieldWrapper>
        <TextField placeholder="리스트 입력" value={listName} onChange={onListNameChange} />
      </TextFieldWrapper>

      {/* <ToggleWrapper>
        <span>매일 반복</span>
        <ToggleSwitch defaultChecked />
      </ToggleWrapper> */}

      <ItemFieldset>
        <Legend>소지품</Legend>

        <ItemWrapper>
          {items.map((item, index) => (
            <EditableTag
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              editable
              value={item}
              onChange={onChangeItem(index)}
              onClickCancel={() => deleteWithIndex(index)}
              onChangedEmpty={() => deleteWithIndex(index)}
            />
          ))}

          <BgLabelButton size="large" onClick={appendEmptyItem}>
            <IconAdd />
            추가하기
          </BgLabelButton>
        </ItemWrapper>
      </ItemFieldset>
    </BottomSheet>
  );
};

export default ListAppendBottomSheet;

const TextFieldWrapper = styled.div({
  marginTop: '8px',
});

// const ToggleWrapper = styled.div(
//   {
//     all: 'unset',
//     marginTop: '16px',
//     height: '52px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   ({ theme }) => ({ ...theme.typographies.body1, color: theme.colors.gray6, ...theme.divider }),
// );

const ItemFieldset = styled.fieldset({
  width: '100%',
});

const Legend = styled.legend({ padding: '14px 0' }, ({ theme }) => ({
  ...theme.typographies.body1,
  color: theme.colors.gray6,
}));

const ItemWrapper = styled.div({
  width: '100%',
  display: 'flex',
  gap: '8px',
  overflowY: 'scroll',
  '& *': {
    flexShrink: '0',
  },
});

const BgLabelButton = styled(LabelButton)(({ theme }) => ({
  color: theme.colors.gray4,
  backgroundColor: theme.colors.gray1,
}));

const useItemList = () => {
  const [items, setItems] = useState<string[]>([]);

  const appendEmptyItem = () => {
    setItems((prev) => [...prev, '']);
  };

  const onChangeItem = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    setItems((prev) => {
      const temp = [...prev];
      temp[index] = e.target.value;
      return temp;
    });
  };

  const deleteWithIndex = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return { items, appendEmptyItem, deleteWithIndex, onChangeItem };
};
