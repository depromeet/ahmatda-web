import { Graphic } from '@/components/graphic/type';

export type TitleType = {
  [index: string]: { title: React.ReactElement };
};

export type ItemType = {
  id: number;
  name: string;
  emoji: Graphic;
};

export type ItemsType = {
  DAILY: ItemType[];
  TRAVEL: ItemType[];
  EXERCISE: ItemType[];
};
