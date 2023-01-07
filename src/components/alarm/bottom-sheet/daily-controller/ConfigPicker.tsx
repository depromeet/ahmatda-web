import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import SelectItem from '../SelectItem';

import DateTimePicker from '@/components/scrollable-date-time-picker/DateTimePicker';
import { AlarmTimeOption, alarmTimeOptionPairs } from '@/models/alarm';
import dailyState from '@/store/alarm-config/daily';

const ConfigPicker = () => {
  const [dateInfo, setDateInfo] = useRecoilState(dailyState);
  const { alarmDateTime, timeOption, activePicker } = dateInfo;

  if (activePicker === 'dateTime') {
    const handleChange = (changedDate: number) => setDateInfo((prev) => ({ ...prev, alarmDateTime: changedDate }));
    return (
      <Row>
        <div>외출 날짜 및 시간</div>
        <DateTimePicker initialValue={alarmDateTime} onChange={handleChange} />
      </Row>
    );
  }

  if (activePicker === 'timeOption') {
    const handleClick = (key: AlarmTimeOption) => setDateInfo((prev) => ({ ...prev, timeOption: key }));
    return (
      <Row>
        <div>알림 희망 시간</div>
        <Row>
          {alarmTimeOptionPairs.map(({ key, value }) => (
            <SelectItem key={key} text={value} active={key === timeOption} onClick={() => handleClick(key)} />
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
