import { Pair } from '.';

export type AlarmInterval = 'ByDay' | 'ByDate';

export type Weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type Day = 'everyday' | 'weekdays' | 'weekends';
export type OutingDay = Weekday | Day;

export const weekdayPairs: Pair<Weekday, string>[] = [
  { key: 'Sunday', value: '일' },
  { key: 'Monday', value: '월' },
  { key: 'Tuesday', value: '화' },
  { key: 'Wednesday', value: '수' },
  { key: 'Thursday', value: '목' },
  { key: 'Friday', value: '금' },
  { key: 'Saturday', value: '토' },
];
export const dayPairs: Pair<Day, string>[] = [
  { key: 'everyday', value: '매일' },
  { key: 'weekdays', value: '평일' },
  { key: 'weekends', value: '주말' },
];

export type MinutesAgo = 0 | 10 | 30 | 60 | 120 | 1440 | 2880 | 10080;
export type AlarmRepeat = 'ThisWeek' | 'EveryWeek';

export const minutesAgoPairs: Pair<MinutesAgo, string>[] = [
  { key: 0, value: '정시' },
  { key: 10, value: '10분 전' },
  { key: 30, value: '30분 전' },
  { key: 60, value: '1시간 전' },
  { key: 120, value: '2시간 전' },
  { key: 1440, value: '하루 전' },
  { key: 2880, value: '2일 전' },
  { key: 10080, value: '일주일 전' },
];
export const alarmRepeatPairs: Pair<AlarmRepeat, string>[] = [
  { key: 'ThisWeek', value: '이번 주' },
  { key: 'EveryWeek', value: '매주' },
];
