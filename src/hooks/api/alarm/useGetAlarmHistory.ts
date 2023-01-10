import { useQuery } from '@tanstack/react-query';

import { AlarmHistory } from './type';

import { get } from '@/lib/api';

const getAlarmHistory = () => get<ApiResponse<AlarmHistory[]>>('/alarm/history');

const ALARM_HISTORY_QUERY_KEY = 'alarm_history';

const useGetAlarmHistory = () => {
  return useQuery({
    queryKey: [ALARM_HISTORY_QUERY_KEY],
    queryFn: getAlarmHistory,
  });
};

export default useGetAlarmHistory;
