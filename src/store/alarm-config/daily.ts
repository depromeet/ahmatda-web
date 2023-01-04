import { atom } from 'recoil';

import { AlarmTimeOption } from '@/models/alarm';

interface DailyState {
  alarmDateTime: number;
  timeOption: AlarmTimeOption;
  activePicker: 'dateTime' | 'timeOption' | null;
}

const dailyState = atom<DailyState>({
  key: 'alarmConfig/daily',
  default: {
    alarmDateTime: Date.now(),
    timeOption: 'ONTIME',
    activePicker: null,
  },
});

export default dailyState;
