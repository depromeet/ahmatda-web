import Svg, { Props } from '../svg/Svg';

const IconCancelSmall = ({ stroke, strokeWidth, ...rest }: Props) => (
  <Svg {...rest}>
    <path
      d="M16.2426 7.75729L12 11.9999M12 11.9999L7.75736 16.2426M12 11.9999L16.2426 16.2426M12 11.9999L7.75736 7.75729"
      stroke={stroke || '#9090A0'}
      strokeWidth={strokeWidth || '1.5'}
      strokeLinecap="round"
    />
  </Svg>
);

export default IconCancelSmall;
