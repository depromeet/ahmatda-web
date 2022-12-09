import Svg, { Props } from '../svg/Svg';

const IconCircleCheck = ({ ...rest }: Props) => (
  <Svg {...rest}>
    <rect width="24" height="24" fill="white" />
    <rect x="3" y="3" width="18" height="18" rx="9" fill="#9090A0" />
    <path
      d="M8 11.9725L10.6861 14.5L16 9.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.6875 14.5L16.0014 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3" y="3" width="18" height="18" rx="9" stroke="#9090A0" strokeWidth="2" />
  </Svg>
);

export default IconCircleCheck;
