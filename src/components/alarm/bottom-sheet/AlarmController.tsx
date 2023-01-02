import { FC } from 'react';

import AlarmDailyController from './daily-controller/AlarmDailyController';
import AlarmWeeklyController from './weekly-controller/AlarmWeeklyController';

import { AlarmType } from '@/models/alarm';

interface Props {
  alarmType: AlarmType;
}

const AlarmController: FC<Props> = ({ alarmType }) => {
  if (alarmType === 'WEEKLY') {
    return <AlarmWeeklyController />;
  }

  return <AlarmDailyController />;
};

export default AlarmController;
