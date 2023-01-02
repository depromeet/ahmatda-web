import { atom } from 'recoil';

import { AlarmTimeOption } from '@/models/alarm';

interface DailyState {
  alarmDateTime: number;
  alarmTimeOption: AlarmTimeOption;
  activePicker: 'dateTime' | 'timeOption' | null;
}

const dailyState = atom<DailyState>({
  key: 'alarmConfig/daily',
  default: {
    alarmDateTime: Date.now(),
    alarmTimeOption: 'ONTIME',
    activePicker: null,
  },
});

export default dailyState;
