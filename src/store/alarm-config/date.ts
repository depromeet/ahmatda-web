import { atom } from 'recoil';

import { MinutesAgo } from '@/models/alarm';

interface DateState {
  date: number;
  minutesAgo: MinutesAgo;
  activePicker: 'date' | 'minutesAgo' | null;
}

const dateState = atom<DateState>({
  key: 'alarmConfig/date',
  default: {
    date: Date.now(),
    minutesAgo: 0,
    activePicker: null,
  },
});

export default dateState;
