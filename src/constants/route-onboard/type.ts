import { Graphic } from '@/components/graphic/type';

export type TitleType = {
  [index: string]: { title: React.ReactElement };
};

export type ItemType = {
  name: string;
  emoji: Graphic;
};

export type ItemsType = {
  DAILY: ItemType[];
  TRAVEL: ItemType[];
  EXERCISE: ItemType[];
};

export type ListCardType = {
  title: string;
  option: ItemType[];
};

export type ListCardsType = {
  DAILY: ListCardType[];
  TRAVEL: ListCardType[];
  EXERCISE: ListCardType[];
};
