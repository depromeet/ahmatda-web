import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { GetAlarmResponse } from './type';

import { get } from '@/lib/api';
import configState from '@/store/alarm-config/config';
import dailyState from '@/store/alarm-config/daily';

interface Response {
  result: GetAlarmResponse;
}

const getAlarm = (templateId: number) => get<Response>(`/alarm?templateId=${templateId}`);

const ALARM_QUERY_KEY = 'alarm';

const useGetAlarm = (templateId?: number) => {
  const setAlarmConfig = useSetRecoilState(configState);
  const setDailyAlarmConfig = useSetRecoilState(dailyState);

  const query = useQuery({
    queryKey: [ALARM_QUERY_KEY, templateId],
    queryFn: () => getAlarm(templateId as number),
    enabled: !!templateId,
    onSuccess: (data: Response) => {
      const { alarmType, activated, timeOption, alarmDateTime } = data.result;

      setAlarmConfig((prev) => ({ ...prev, alarmType, isActivated: activated }));

      if (alarmType === 'DAILY') {
        setDailyAlarmConfig((prev) => ({
          ...prev,
          alarmTimeOption: timeOption,
          alarmDateTime: new Date(alarmDateTime).getTime(),
        }));
        return;
      }

      if (alarmType === 'WEEKLY') {
        // @todo: WEEKLY
      }
    },
  });
  return { ...query, data: query.data?.result };
};

export default useGetAlarm;
