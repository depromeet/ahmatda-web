import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';

import Picker from '../Picker';

import { alarmTimeOptionPairs } from '@/models/alarm';
import dailyState from '@/store/alarm-config/daily';

const Header = () => {
  const [dateInfo, setDateInfo] = useRecoilState(dailyState);
  const { alarmDateTime, alarmTimeOption, activePicker } = dateInfo;

  const dateText = dayjs(alarmDateTime).format('M월 D일 A h:mm');
  const minutesAgoText = alarmTimeOptionPairs.find(({ key }) => key === alarmTimeOption)?.value ?? '';

  const handleClickPicker = (picker: 'dateTime' | 'timeOption') => () =>
    setDateInfo((prev) => ({ ...prev, activePicker: picker }));

  return (
    <Row>
      <Row>
        <Picker text={dateText} active={activePicker === 'dateTime'} onClick={handleClickPicker('dateTime')} />
      </Row>
      <Row>
        <Picker
          text={minutesAgoText}
          active={activePicker === 'timeOption'}
          onClick={handleClickPicker('timeOption')}
        />
        <span>에</span>
        <span>챙겨드릴께요!</span>
      </Row>
    </Row>
  );
};

export default Header;

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
