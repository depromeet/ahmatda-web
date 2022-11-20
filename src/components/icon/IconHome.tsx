import Svg, { Props as SvgProps } from '../svg/Svg';

interface Props extends SvgProps {
  /**
   * @default `false`
   */
  isAct?: boolean;
}

interface HomeColor {
  rect: string;
  path: string;
}

const HOME_COLOR = (isAct: boolean): HomeColor =>
  isAct ? { rect: '#212121', path: '#ffffff' } : { rect: '#E9E9EE', path: '#C7C7D0' };

const IconHome = ({ isAct = false, ...rest }: Props) => (
  <Svg {...rest}>
    <rect
      x="1.5"
      y="1.5"
      width="21"
      height="21"
      rx="5"
      fill={HOME_COLOR(isAct).rect}
      style={{ transition: 'fill .3s' }}
    />
    <path
      d="M16.125 9.46191L11.4017 14.1852C11.2064 14.3805 10.8898 14.3805 10.6946 14.1852L7.875 11.3657"
      stroke={HOME_COLOR(isAct).path}
      strokeWidth="2"
      strokeLinecap="round"
      style={{ transition: 'stroke .3s' }}
    />
  </Svg>
);

export default IconHome;
