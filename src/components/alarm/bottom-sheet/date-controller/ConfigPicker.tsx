import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import SelectItem from '../SelectItem';

import DateTimePicker from '@/components/scrollable-date-time-picker/DateTimePicker';
import { MinutesAgo, minutesAgoPairs } from '@/models/alarm';
import dateState from '@/store/alarm-config/date';

const ConfigPicker = () => {
  const [dateInfo, setDateInfo] = useRecoilState(dateState);
  const { date, minutesAgo, activePicker } = dateInfo;

  if (activePicker === 'date') {
    const handleChange = (changedDate: number) => setDateInfo((prev) => ({ ...prev, date: changedDate }));
    return (
      <Row>
        <div>외출 날짜 및 시간</div>
        <Row>
          <DateTimePicker initialDate={date} onChange={handleChange} />;
        </Row>
      </Row>
    );
  }

  if (activePicker === 'minutesAgo') {
    const handleClick = (key: MinutesAgo) => setDateInfo((prev) => ({ ...prev, minutesAgo: key }));
    return (
      <Row>
        <div>알림 희망 시간</div>
        <Row>
          {minutesAgoPairs.map(({ key, value }) => (
            <SelectItem key={key} text={value} active={key === minutesAgo} onClick={() => handleClick(key)} />
          ))}
        </Row>
      </Row>
    );
  }

  return null;
};

export default ConfigPicker;

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
