import Svg, { Props } from '../svg/Svg';

const IconMovable = ({ ...rest }: Props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Svg {...rest}>
    <path d="M6 8.625H18" stroke="#9090A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12H18" stroke="#9090A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 15.375H18" stroke="#9090A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default IconMovable;
