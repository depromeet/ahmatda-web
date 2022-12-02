import { ComponentProps, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';
import Dialog from '../portal/Dialog';
import TextField from '../text-field/TextField';
import ToggleSwitch from '../toggle/ToggleSwitch';

import useInput from '@/hooks/common/useInput';
import useDidUpdate from '@/hooks/life-cycle/useDidUpdate';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const ListSettingBottomSheet = ({ isShowing, setToClose }: Props) => {
  const {
    value: listName,
    onChange: onChangeListName,
    debouncedValue: debouncedListName,
  } = useInput({ initialValue: '', useDebounce: true });
  const [isDialogShowing, setIsDialogShowing] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  useDidUpdate(() => {
    const isDisabled = debouncedListName.length === 0;
    setIsSubmitDisabled(isDisabled);
  }, [debouncedListName]);

  const handleListSettingComplete = () => {
    // TODO: 리스트 설정 완료 시 실행할 로직 추가
    setToClose();
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <AppBar
        backButtonType="cancel"
        title="리스트 설정"
        rightElement={
          <LabelButton disabled={isSubmitDisabled} onClick={handleListSettingComplete} size="large">
            완료
          </LabelButton>
        }
        onClickBackButton={setToClose}
      />
      <div style={{ marginTop: 8 }}>
        <TextField value={listName} onChange={onChangeListName} />
      </div>
      <SettingOptionList>
        <Option>
          <span>매일 반복</span>
          <ToggleSwitch />
        </Option>
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
        rightButton={<Dialog.WarningButton>삭제하기</Dialog.WarningButton>}
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
