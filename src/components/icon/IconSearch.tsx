import Svg, { Props as SvgProps } from '../svg/Svg';

import theme from '@/styles/theme';

interface Props extends SvgProps {
  /**
   * @default `false`
   */
  isAct?: boolean;
}

interface SearchColor {
  rect: string;
  circle: string;
}

const SEARCH_COLOR = (isAct: boolean): SearchColor =>
  isAct
    ? { rect: theme.colors.black, circle: theme.colors.black }
    : { rect: theme.colors.gray2, circle: theme.colors.gray2 };

const IconSearch = ({ isAct = false, ...rest }: Props) => (
  <Svg {...rest}>
    <rect
      width="2"
      height="14.35"
      rx="1"
      transform="matrix(-0.707107 0.707107 0.707107 0.707107 12.75 11.3398)"
      fill={SEARCH_COLOR(isAct).rect}
      style={{ transition: 'fill .3s' }}
    />
    <circle
      cx="10.1622"
      cy="10.1621"
      r="9.35"
      transform="rotate(-45 10.1622 10.1621)"
      fill={SEARCH_COLOR(isAct).circle}
      stroke="white"
      strokeWidth="1.5"
      style={{ transition: 'fill .3s' }}
    />
  </Svg>
);

export default IconSearch;
