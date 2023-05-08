import type { Props } from '../svg/Svg';

export interface GraphicProps extends Props {
  /**
   * @default `false`
   */
  isAct?: boolean;
}

export const graphics = [
  'BOWLING',
  'BUS',
  'CAMERA',
  'ETC',
  'FRIENDS',
  'GYM',
  'PLANE',
  'RUN',
  'SCHOOL',
  'SWIM',
  'TUBE',
  'WORK',
  '10KG',
  'CARD',
  'PC',
  'AIRPODS',
  'HANDBAG',
  'LIPBALM',
  'APPLEWATCH',
  'BATTERY',
  'CARRIER',
  'CHARGER',
  'CURLINGIRON',
  'EYEDROPS',
  'GLASSES',
  'HEADBAND',
  'HEADPHONES',
  'IDCARD',
  'KEY',
  'MASK',
  'MAT',
  'PASSPORT',
  'PERFUME',
  'PILL',
  'POUCH',
  'PROTEIN',
  'ROAMING',
  'SHAKE',
  'SOCKET',
  'SPORTSWEAR',
  'STRAP',
  'SUNGLASSES',
  'TEETH',
  'TISSUE',
  'TOESCOKS',
  'TOILETRIES',
  'TOWEL',
  'TUMBLER',
  'UNDERWEAR',
  'UMBRELLA',
  'WALLET',
] as const;

export type Graphic = typeof graphics[number];
