import Svg, { Props } from '../svg/Svg';

const IconInfo = ({ ...rest }: Props) => (
  <Svg {...rest} data-testid="icon-info">
    <rect width="16" height="16" rx="4" fill="#E9E9EE" />
    <path
      d="M7.20741 14H8.79259V5.34661H7.20741V14ZM7 3.00398C7.00741 3.56175 7.45926 4.01594 8.00741 4.00797C8.54815 4.01594 9 3.56175 9 3.00398C9 2.44622 8.54815 2 8.00741 2C7.45926 2 7.00741 2.44622 7 3.00398Z"
      fill="#C7C7D0"
    />
  </Svg>
);

export default IconInfo;
