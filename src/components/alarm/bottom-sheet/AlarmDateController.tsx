import styled from '@emotion/styled';

import Picker from './Picker';
import SelectItem from './SelectItem';

import TimePicker from '@/components/scrollable-date-time-picker/TimePicker';
import { minutesAgoPairs } from '@/models/alarm';

const AlarmDateController = () => {
  return (
    <>
      <Row>
        <Row>
          <Picker text="11월 4일 오전 8:00" active />
        </Row>
        <Row>
          <Picker text="정시" />
          <span>에</span>
          <span>챙겨드릴께요!</span>
        </Row>
      </Row>
      <Divider />
      <div>알림 희망 시간</div>
      <Row>
        {minutesAgoPairs.map(({ key, value }) => (
          <SelectItem text={value} key={key} />
        ))}
      </Row>
      <div>외출 시간 및 시간</div>
      <Row>
        <TimePicker />
      </Row>
    </>
  );
};

export default AlarmDateController;

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
