import Svg, { Props as SvgProps } from '../svg/Svg';

import theme from '@/styles/theme';

interface Props extends SvgProps {
  /**
   * @default `false`
   */
  isOff?: boolean;
}

interface PinColor {
  rect: string;
  path: string;
}

const PIN_COLOR = (isOff: boolean): PinColor =>
  isOff
    ? { rect: theme.colors.gray2, path: theme.colors.gray2 }
    : { rect: theme.colors.gray4, path: theme.colors.gray4 };

const IconPin = ({ isOff = false, ...rest }: Props) => (
  <Svg {...rest}>
    <rect
      x="8.30493"
      y="14.3901"
      width="2"
      height="9.99886"
      rx="1"
      transform="rotate(45 8.30493 14.3901)"
      fill={PIN_COLOR(isOff).rect}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8631 2.77927L12.5665 4.70685L8.30765 8.96574L4.30729 9.49912C3.1704 9.65071 2.7002 11.0396 3.51122 11.8507L12.2767 20.6161C13.0877 21.4271 14.4766 20.9569 14.6282 19.82L15.1617 15.8187L19.4199 11.5605L21.3477 11.2639C22.4687 11.0914 22.9182 9.71827 22.1163 8.91631L15.2107 2.01073C14.4087 1.20878 13.0356 1.65832 12.8631 2.77927Z"
      fill={PIN_COLOR(isOff).path}
    />
  </Svg>
);

export default IconPin;
