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
] as const;

export type Graphic = typeof graphics[number];
