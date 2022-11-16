import Svg, { Props } from '../svg/Svg';

const IconCancel = ({ ...rest }: Props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Svg {...rest}>
    <path
      d="M19.0711 5.07107L12 12.1421M12 12.1421L4.92893 19.2132M12 12.1421L19.0711 19.2132M12 12.1421L4.92893 5.07107"
      stroke="#9090A0"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export default IconCancel;
