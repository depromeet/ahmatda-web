import { ComponentProps, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';
import Dialog from '../portal/Dialog';
import TextField from '../text-field/TextField';
import ToggleSwitch from '../toggle/ToggleSwitch';

import useInput from '@/hooks/common/useInput';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const TemplateItemSettingBottomSheet = ({ isShowing, setToClose }: Props) => {
  const {
    value: itemName,
    onChange: onChangeItemName,
    debouncedValue: debouncedItemName,
  } = useInput({ initialValue: '', useDebounce: true });
  const [isDialogShowing, setIsDialogShowing] = useState(false);

  const isSubmitDisabled = debouncedItemName.length === 0 || debouncedItemName.length >= 30;

  const handleTemplateItemSettingComplete = () => {
    // TODO: 소지품 설정 완료 시 실행할 로직 추가
    setToClose();
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <AppBar
        backButtonType="cancel"
        title="소지품 설정"
        rightElement={
          <LabelButton disabled={isSubmitDisabled} onClick={handleTemplateItemSettingComplete} size="large">
            완료
          </LabelButton>
        }
        onClickBackButton={setToClose}
      />
      <div style={{ marginTop: 8 }}>
        <TextField
          value={itemName}
          onChange={onChangeItemName}
          error={debouncedItemName.length >= 30 ? '최대 n자까지 입력 가능합니다.' : undefined}
        />
      </div>
      <SettingOptionList>
        <Option>
          <span>중요 소지품</span>
          <ToggleSwitch />
        </Option>
        <Option
          isDeleteOption
          onClick={() => {
            setIsDialogShowing(true);
          }}
        >
          소지품 삭제하기
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
        rightButton={<Dialog.WarningButton>삭제하기</Dialog.WarningButton>}
      />
    </BottomSheet>
  );
};

export default TemplateItemSettingBottomSheet;

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
    <Dialog.ContentTitle>소지품을 삭제할까요?</Dialog.ContentTitle>
    <Dialog.ContentBody>삭제 후에는 복구가 어려워요.</Dialog.ContentBody>
  </>
);
