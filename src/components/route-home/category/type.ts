export const categories = ['일상', '여행', '운동'] as const;

export type CategoryType = typeof categories[number];
