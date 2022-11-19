import Svg, { Props } from '../svg/Svg';

const IconMenu = ({ ...rest }: Props) => (
  <Svg {...rest}>
    <path d="M4 7.5H20" stroke="#626273" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12H20" stroke="#626273" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 16.5H20" stroke="#626273" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default IconMenu;
