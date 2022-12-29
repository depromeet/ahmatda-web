import { FC } from 'react';

import AlarmDateController from './date-controller/AlarmDateController';
import AlarmDayController from './AlarmDayController';

import { AlarmType } from '@/models/alarm';

interface Props {
  alarmType: AlarmType;
}

const AlarmController: FC<Props> = ({ alarmType }) => {
  if (alarmType === 'Day') {
    return <AlarmDayController />;
  }

  return <AlarmDateController />;
};

export default AlarmController;
