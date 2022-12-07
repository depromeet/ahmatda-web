import { ComponentProps, FC } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../../button/LabelButton';
import AppBar from '../../navigation/AppBar';
import BottomSheet from '../../portal/BottomSheet';
import SegmentedControl from '../../segmented-control/SegmentedControl';
import ToggleSwitch from '../../toggle/ToggleSwitch';

import Dropdown from './Dropdown';
import SelectItem from './SelectItem';
import TimePicker from './TimePicker';

import { dayPairs, weekdayPairs } from '@/models/alarm';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const AlarmBottomSheet: FC<Props> = ({ isShowing, setToClose }) => {
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
            <ToggleSwitch />
          </Row>
          <SegmentedControl options={['요일별', '날짜별']} />
          <Row>
            <Dropdown text="평일" active />
            <Dropdown text="오전 8:00" />
          </Row>
          <Row>
            <Dropdown text="정시" />
            <span>에</span>
            <Dropdown text="매주" />
            <span>챙겨드릴께요!</span>
          </Row>
          <Divider />
          <div>알림</div>

          <Row>
            {weekdayPairs.map((dayPair) => (
              <SelectItem text={dayPair.value} key={dayPair.key} />
            ))}
          </Row>
          <Row>
            {dayPairs.map((dayPair) => (
              <SelectItem text={dayPair.value} key={dayPair.key} />
            ))}
          </Row>
          <div>외출 시간</div>
          <Row>
            <TimePicker />
          </Row>
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

const Divider = styled.hr(
  {
    border: 'none',
    height: '1px',
    width: '100%',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.gray2,
  }),
);
