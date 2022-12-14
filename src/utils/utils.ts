export const checkNull = (value?: string | null): string => {
  if (!value) {
    return '';
  }

  return value;
};

export const checkNumNull = (value?: number | null): number => {
  if (!value) {
    return 0;
  }

  return value;
};

export const emptyAThenB = <T>(b: T, a?: T | null) => a || b;

export const convertToNumber = (value?: string | null) => {
  if (!value) {
    return 0;
  }

  const number = Number(value);

  if (typeof number !== 'number' || Number.isNaN(number)) {
    return 0;
  }

  return number;
};

export const checkEmpty = <T>(value?: T[]): T[] => {
  if (!value || !value.length) {
    return [];
  }

  return value;
};

export const isProd = (env: string): boolean => env === 'production';

export const isIn = <T>(values: ReadonlyArray<T>, x: unknown): x is T => {
  return values.includes(x as T);
};

export const isServerSide = () => typeof window === 'undefined';

export const objectKeys = <T extends { [key: string]: unknown }>(obj: T): Array<keyof T> => Object.keys(obj);
