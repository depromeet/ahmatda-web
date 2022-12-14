import type { Props } from '../svg/Svg';

export interface GraphicProps extends Props {
  /**
   * @default `false`
   */
  isAct?: boolean;
}

export type Graphic =
  | 'BOWLING'
  | 'BUS'
  | 'CAMERA'
  | 'EMPTYCARD'
  | 'ETC'
  | 'FRIENDS'
  | 'GYM'
  | 'PLANE'
  | 'RUN'
  | 'SCHOOL'
  | 'SWIM'
  | 'TUBE'
  | 'WORK';
