import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';

import Picker from '../Picker';

import { minutesAgoPairs } from '@/models/alarm';
import dateState from '@/store/alarm-config/date';

const Header = () => {
  const [dateInfo, setDateInfo] = useRecoilState(dateState);
  const { date, minutesAgo, activePicker } = dateInfo;

  const dateText = dayjs(date).format('M월 D일 A h:mm');
  const minutesAgoText = minutesAgoPairs.find(({ key }) => key === minutesAgo)?.value ?? '';

  const handleClickPicker = (picker: 'date' | 'minutesAgo') => () =>
    setDateInfo((prev) => ({ ...prev, activePicker: picker }));

  return (
    <Row>
      <Row>
        <Picker text={dateText} active={activePicker === 'date'} onClick={handleClickPicker('date')} />
      </Row>
      <Row>
        <Picker
          text={minutesAgoText}
          active={activePicker === 'minutesAgo'}
          onClick={handleClickPicker('minutesAgo')}
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
