import { ComponentProps, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';
import Dialog from '../portal/Dialog';
import TextField from '../text-field/TextField';

import { UserTemplate } from '@/hooks/api/template/type';
import useUserTemplateMutation from '@/hooks/api/template/useUserTemplateMutation';
import useInput from '@/hooks/common/useInput';

type BottomSheetProps = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

interface Props extends BottomSheetProps {
  id: UserTemplate['id'];
  templateName: UserTemplate['templateName'];
  pin: UserTemplate['pin'];
}

const ListSettingBottomSheet = ({ id, templateName, pin, isShowing, setToClose }: Props) => {
  const {
    value: listName,
    onChange: onChangeListName,
    resetValue: resetListName,
    debouncedValue: debouncedListName,
  } = useInput({ initialValue: templateName, useDebounce: true });
  const [isDialogShowing, setIsDialogShowing] = useState(false);

  const isSubmitDisabled = debouncedListName.length === 0;

  const closeWithReset = () => {
    setToClose();
    resetListName();
  };

  const { editUserTemplateMutation, deleteUserTemplateMutation } = useUserTemplateMutation();

  const handleListSettingComplete = () => {
    editUserTemplateMutation.mutate(
      { templateId: id, templateName: debouncedListName, pin },
      {
        onSuccess: () => {
          setToClose();
        },
      },
    );
  };

  const onClickDelete = () => {
    deleteUserTemplateMutation.mutate(id, {
      onSuccess: () => {
        setToClose();
      },
    });
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={closeWithReset}>
      <AppBar
        backButtonType="cancel"
        title="리스트 설정"
        rightElement={
          <LabelButton disabled={isSubmitDisabled} onClick={handleListSettingComplete} size="large">
            완료
          </LabelButton>
        }
        onClickBackButton={closeWithReset}
      />
      <div style={{ marginTop: 8 }}>
        <TextField value={listName} onChange={onChangeListName} />
      </div>
      <SettingOptionList>
        {/* <Option>
          <span>매일 반복</span>
          <ToggleSwitch />
        </Option> */}
        <Option
          isDeleteOption
          onClick={() => {
            setIsDialogShowing(true);
          }}
        >
          리스트 삭제하기
        </Option>
      </SettingOptionList>
      <Dialog
        setToClose={() => {
          setIsDialogShowing(false);
        }}
        isShowing={isDialogShowing}
        content={DialogContent}
        leftButton={
          <Dialog.Button
            onClick={() => {
              setIsDialogShowing(false);
            }}
          >
            아니요
          </Dialog.Button>
        }
        rightButton={<Dialog.WarningButton onClick={onClickDelete}>삭제하기</Dialog.WarningButton>}
      />
    </BottomSheet>
  );
};

export default ListSettingBottomSheet;

const SettingOptionList = styled.ul`
  margin-top: 16px;
`;

interface OptionProps {
  isDeleteOption?: boolean;
}

const Option = styled('li')<OptionProps>(
  {
    paddingBlock: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:last-child': {
      border: 0,
    },
  },
  ({ theme }) => ({ ...theme.typographies.body1, ...theme.divider }),
  (props) => props.isDeleteOption && { color: props.theme.colors.danger },
);

const DialogContent = (
  <>
    <Dialog.ContentTitle>리스트를 삭제할까요?</Dialog.ContentTitle>
    <Dialog.ContentBody>리스트 안의 소지품까지 모두 사라져요.</Dialog.ContentBody>
  </>
);
