import { Graphic } from '@/components/graphic/type';

export interface Category {
  id: number;
  name: string;
  type: CategoryKind;
  emoji: Graphic;
}

export const CATEGORY_KIND = {
  DAILY: '일상',
  EXERCISE: '운동',
  TRIP: '여행',
} as const;

export type CategoryKind = keyof typeof CATEGORY_KIND;

export type KRCategoryKind = typeof CATEGORY_KIND[CategoryKind];
