import { ComponentProps, FC, useState } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../../button/LabelButton';
import AppBar from '../../navigation/AppBar';
import BottomSheet from '../../portal/BottomSheet';

import AlarmDateController from './AlarmDateController';
import AlarmDayController from './AlarmDayController';

import SegmentedControl from '@/components/segmented-control/SegmentedControl';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { AlarmType, alarmTypePairs } from '@/models/alarm';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const AlarmBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
  const [alarmType, setAlarmType] = useState<AlarmType>('Day');

  const alarmTypeOptions = alarmTypePairs.map((pair) => pair.value);
  const alarmTypeValue = alarmTypePairs.find((pair) => pair.key === alarmType)?.value;

  const handleChangeAlarmType = (option: string) => {
    const alarmTypeKey = alarmTypePairs.find(({ value }) => option === value)?.key;

    if (!alarmTypeKey) return;

    setAlarmType(alarmTypeKey);
  };

  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <AppBar
        backButtonType="cancel"
        title="알림 설정"
        onClickBackButton={setToClose}
        rightElement={<LabelButton size="large">완료</LabelButton>}
      />
      <Wrapper>
        <Form>
          <Row spaceBetween>
            <div>알림</div>
            <ToggleSwitch name="alarm" />
          </Row>
          <SegmentedControl options={alarmTypeOptions} initialValue={alarmTypeValue} onChange={handleChangeAlarmType} />
          {alarmType === 'Day' ? <AlarmDayController /> : <AlarmDateController />}
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
