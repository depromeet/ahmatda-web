import { atom } from 'recoil';

import { AlarmType } from '@/models/alarm';

interface ConfigState {
  templateId: number | null;
  alarmType: AlarmType;
  isActivated: boolean;
}

const configState = atom<ConfigState>({
  key: 'alarmConfig/config',
  default: {
    templateId: null,
    alarmType: 'DAILY',
    isActivated: false,
  },
});

export default configState;
