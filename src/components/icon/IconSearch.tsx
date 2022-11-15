import Svg, { Props as SvgProps } from '../svg/Svg';

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
  isAct ? { rect: '#212121', circle: '#212121' } : { rect: '#C7C7D0', circle: '#E9E9EE' };

const IconSearch = ({ isAct = false, ...rest }: Props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Svg {...rest}>
    <rect
      width="2"
      height="14.35"
      rx="1"
      transform="matrix(-0.707107 0.707107 0.707107 0.707107 12.75 11.3398)"
      fill={SEARCH_COLOR(isAct).rect}
    />
    <circle
      cx="10.1622"
      cy="10.1621"
      r="9.35"
      transform="rotate(-45 10.1622 10.1621)"
      fill={SEARCH_COLOR(isAct).circle}
      stroke="white"
      strokeWidth="1.5"
    />
  </Svg>
);

export default IconSearch;
