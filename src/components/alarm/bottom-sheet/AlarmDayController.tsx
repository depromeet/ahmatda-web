import styled from '@emotion/styled';

import Picker from './Picker';
import SelectItem from './SelectItem';

import TimePicker from '@/components/scrollable-date-time-picker/TimePicker';
import { dayPairs, weekdayPairs } from '@/models/alarm';

const AlarmDayController = () => {
  return (
    <>
      <Row>
        <Row>
          <Picker text="평일" active />
          <Picker text="오전 8:00" />
        </Row>
        <Row>
          <Picker text="정시" />
          <span>에</span>
          <Picker text="매주" />
          <span>챙겨드릴께요!</span>
        </Row>
      </Row>
      <Divider />
      <div>알림</div>

      <Row>
        {weekdayPairs.map(({ key, value }) => (
          <SelectItem text={value} key={key} />
        ))}
      </Row>
      <Row>
        {dayPairs.map(({ key, value }) => (
          <SelectItem text={value} key={key} />
        ))}
      </Row>
      <div>외출 시간</div>
      <Row>
        <TimePicker />
      </Row>
    </>
  );
};

export default AlarmDayController;

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
