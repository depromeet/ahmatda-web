import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';

import { CreateAlarmRequest, CreateDailyAlarmRequest } from './type';

import { post } from '@/lib/api';
import configState from '@/store/alarm-config/config';
import dailyState from '@/store/alarm-config/daily';

const createAlarm = (data: CreateAlarmRequest) => post(`/alarm/daily`, data);

const useCreateAlarm = () => {
  const { alarmTimeOption, alarmDateTime } = useRecoilValue(dailyState);
  const { isActivated } = useRecoilValue(configState);

  const requestDailyAlarmData = (templateId: number): CreateDailyAlarmRequest => ({
    alarmType: 'DAILY',
    templateId,
    isActivated,
    alarmDateTime: dayjs(alarmDateTime).format('YYYY-MM-DDTHH:mm'),
    alarmTimeOption,
  });

  const mutate = useMutation((templateId: number) => createAlarm(requestDailyAlarmData(templateId)));

  return mutate;
};

export default useCreateAlarm;
