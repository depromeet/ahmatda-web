export interface UserItem {
  id: number;
  templateId: number;
  categoryId: number;
  name: string;
  alarmId: number;
  important: boolean;
  take: boolean;
}

export type RecItem = Omit<UserItem, 'alarmId' | 'important' | 'take'>;

export interface UserTemplate {
  id: number;
  userToken: string;
  templateName: string;
  categoryId: number;
  items: UserItem[];
  pin: boolean;
}
export interface RecTemplate extends Pick<UserTemplate, 'id' | 'categoryId' | 'templateName'> {
  items: RecItem[];
}
