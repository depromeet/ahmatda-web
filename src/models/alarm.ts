import { Pair } from '.';

export type AlarmType = 'WEEKLY' | 'DAILY';

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

export type AlarmTimeOption =
  | 'ONTIME'
  | 'TEN_MINUTES'
  | 'THIRTY_MINUTES'
  | 'ONE_HOUR'
  | 'TWO_HOURS'
  | 'ONE_DAY'
  | 'TWO_DAYS'
  | 'ONE_WEEK';
export type AlarmRepeat = 'ThisWeek' | 'EveryWeek';

export const alarmTimeOptionPairs: Pair<AlarmTimeOption, string>[] = [
  { key: 'ONTIME', value: '정시' },
  { key: 'TEN_MINUTES', value: '10분 전' },
  { key: 'THIRTY_MINUTES', value: '30분 전' },
  { key: 'ONE_HOUR', value: '1시간 전' },
  { key: 'TWO_HOURS', value: '2시간 전' },
  { key: 'ONE_DAY', value: '하루 전' },
  { key: 'TWO_DAYS', value: '2일 전' },
  { key: 'ONE_WEEK', value: '일주일 전' },
];
export const alarmRepeatPairs: Pair<AlarmRepeat, string>[] = [
  { key: 'ThisWeek', value: '이번 주' },
  { key: 'EveryWeek', value: '매주' },
];
export const alarmTypePairs: Pair<AlarmType, string>[] = [
  { key: 'WEEKLY', value: '요일별' },
  { key: 'DAILY', value: '날짜별' },
];
