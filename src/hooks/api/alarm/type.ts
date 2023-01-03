import { AlarmTimeOption, AlarmType } from '@/models/alarm';

export interface GetDailyAlarmResponse {
  templateId: number;
  alarmType: 'DAILY';
  dayOfWeek: null;
  alarmTime: null;
  replayType: null;
  alarmDateTime: string; // yyyy-mm-ddTHH:mm:ss
  timeOption: AlarmTimeOption;
  activated: boolean;
}
export interface GetWeeklyAlarmResponse {
  templateId: number;
  alarmType: 'WEEKLY';
  dayOfWeek: string;
  alarmTime: string;
  replayType: string;
  alarmDateTime: null;
  timeOption: null;
  activated: boolean;
}
export type GetAlarmResponse = GetDailyAlarmResponse | GetWeeklyAlarmResponse;

export interface CreateDailyAlarmRequest {
  alarmType: AlarmType;
  templateId: number;
  isActivated: boolean;
  alarmDateTime: string; // yyyy-mm-ddTHH:mm:ss
  alarmTimeOption: AlarmTimeOption;
}
export type CreateWeeklyAlarmRequest = never;
export type CreateAlarmRequest = CreateDailyAlarmRequest | CreateWeeklyAlarmRequest;
