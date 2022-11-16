import Svg, { Props } from '../svg/Svg';

const IconAdd = ({ ...rest }: Props) => (
  <Svg {...rest}>
    <path d="M12 6.5V12M12 12V17.5M12 12H17.5M12 12H6.5" stroke="#C7C7D0" strokeWidth="1.5" strokeLinecap="round" />
  </Svg>
);

export default IconAdd;
