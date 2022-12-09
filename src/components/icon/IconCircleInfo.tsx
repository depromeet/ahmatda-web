import Svg, { Props } from '../svg/Svg';

const IconCircleInfo = ({ ...rest }: Props) => (
  <Svg {...rest}>
    <circle cx="12" cy="12" r="10" fill="#9090A0" />
    <circle cx="12" cy="7" r="1" fill="white" />
    <rect x="11" y="10" width="2" height="8" rx="1" fill="white" />
  </Svg>
);

export default IconCircleInfo;
