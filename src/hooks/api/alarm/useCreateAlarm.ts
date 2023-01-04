import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';

import { USER_TEMPLATE_QUERY_KEY } from '../template/useGetUserTemplate';

import { CreateAlarmRequest, CreateDailyAlarmRequest } from './type';

import { post } from '@/lib/api';
import configState from '@/store/alarm-config/config';
import dailyState from '@/store/alarm-config/daily';
import currentCategoryState from '@/store/route-home/currentCategory';

const createAlarm = (data: CreateAlarmRequest) => post(`/alarm/daily`, data);

const useCreateAlarm = () => {
  const { timeOption, alarmDateTime } = useRecoilValue(dailyState);
  const { isActivated } = useRecoilValue(configState);

  const currentCategory = useRecoilValue(currentCategoryState);

  const queryClient = useQueryClient();

  const requestDailyAlarmData = (templateId: number): CreateDailyAlarmRequest => ({
    alarmType: 'DAILY',
    templateId,
    isActivated,
    alarmDateTime: dayjs(alarmDateTime).format('YYYY-MM-DDTHH:mm'),
    timeOption,
  });

  const mutate = useMutation((templateId: number) => createAlarm(requestDailyAlarmData(templateId)), {
    onSuccess: () => {
      queryClient.invalidateQueries([USER_TEMPLATE_QUERY_KEY, currentCategory?.id]);
    },
  });

  return mutate;
};

export default useCreateAlarm;
