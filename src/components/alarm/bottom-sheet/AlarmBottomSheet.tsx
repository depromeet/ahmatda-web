import { ComponentProps, FC } from 'react';
import styled from '@emotion/styled';
import { useRecoilState, useResetRecoilState } from 'recoil';

import LabelButton from '../../button/LabelButton';
import AppBar from '../../navigation/AppBar';
import BottomSheet from '../../portal/BottomSheet';

import AlarmController from './AlarmController';

import SegmentedControl from '@/components/segmented-control/SegmentedControl';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { alarmTypePairs } from '@/models/alarm';
import configState from '@/store/alarm-config/config';
import dailyState from '@/store/alarm-config/daily';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const AlarmBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const resetDateConfig = useResetRecoilState(dailyState);
  const [{ alarmType, isActivated }, setAlarmConfig] = useRecoilState(configState);

  const alarmTypeOptions = alarmTypePairs.map((pair) => pair.value);
  const alarmTypeValue = alarmTypePairs.find((pair) => pair.key === alarmType)?.value;

  const handleChangeAlarmType = (option: string) => {
    const alarmTypeKey = alarmTypePairs.find(({ value }) => option === value)?.key;

    if (!alarmTypeKey) return;

    setAlarmConfig((prev) => ({ ...prev, alarmType: alarmTypeKey }));
  };

  const onClose = () => {
    resetDateConfig();
    setToClose();
  };

  const onChangeAlarmActivateToggle = () => {
    setAlarmConfig((prev) => ({ ...prev, isActivated: !prev.isActivated }));
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={onClose}>
      <AppBar
        backButtonType="cancel"
        title="알림 설정"
        onClickBackButton={onClose}
        rightElement={
          <LabelButton size="large" onClick={onClose}>
            완료
          </LabelButton>
        }
      />
      <Wrapper>
        <Form>
          <Row spaceBetween>
            <div>알림</div>
            <ToggleSwitch name="alarm" checked={isActivated} onChange={onChangeAlarmActivateToggle} />
          </Row>
          <SegmentedControl options={alarmTypeOptions} initialValue={alarmTypeValue} onChange={handleChangeAlarmType} />
          <AlarmController alarmType={alarmType} />
        </Form>
      </Wrapper>
    </BottomSheet>
  );
};

export default AlarmBottomSheet;

const Wrapper = styled.div(
  {
    height: '60vh',
    width: '100%',
    overflowY: 'scroll',
    paddingBottom: '40px',
  },
  ({ theme }) => ({
    ...theme.typographies.body1,
    color: theme.colors.gray6,
  }),
);

const Form = styled.form({
  width: '100%',
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const Row = styled.div<{ spaceBetween?: boolean }>(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  ({ spaceBetween }) => spaceBetween && { justifyContent: 'space-between' },
);
