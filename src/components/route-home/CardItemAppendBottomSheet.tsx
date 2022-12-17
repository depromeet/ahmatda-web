import { ComponentProps, FC } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';
import TextField from '../text-field/TextField';
import ToggleSwitch from '../toggle/ToggleSwitch';

import useInput from '@/hooks/common/useInput';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const CardItemAppendBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const {
    value: itemName,
    onChange: onChangeItemName,
    debouncedValue: debouncedItemName,
  } = useInput({ initialValue: '', useDebounce: true });

  const isSubmitDisabled = debouncedItemName.length === 0 || debouncedItemName.length >= 30;

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <AppBar
        backButtonType="cancel"
        title="소지품 추가"
        rightElement={
          <LabelButton disabled={isSubmitDisabled} size="large">
            완료
          </LabelButton>
        }
      />

      <div style={{ marginTop: 8 }}>
        <TextField
          value={itemName}
          onChange={onChangeItemName}
          placeholder="소지품 추가하기"
          error={debouncedItemName.length >= 30 ? '최대 30자까지 입력 가능합니다.' : undefined}
        />
      </div>

      <SettingOptionList>
        <Option>
          <span>중요 소지품</span>
          <ToggleSwitch />
        </Option>
      </SettingOptionList>
    </BottomSheet>
  );
};

export default CardItemAppendBottomSheet;

const SettingOptionList = styled.ul`
  margin-top: 16px;
`;

const Option = styled.li(
  {
    paddingBlock: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:last-child': {
      border: 0,
    },
  },
  ({ theme }) => ({ ...theme.typographies.body1, color: theme.colors.gray6 }),
);
