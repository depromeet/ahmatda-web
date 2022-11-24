import Svg, { Props as SvgProps } from '../svg/Svg';

interface Props extends SvgProps {
  isNew?: boolean;
}

const IconAlarm = ({ isNew = false, ...rest }: Props) => (
  <Svg {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.3995 12.6659L21.2812 15.2319C22.2582 16.564 21.3068 18.4414 19.6548 18.4414L4.32061 18.4414C2.6686 18.4414 1.71727 16.564 2.69421 15.2319L4.57586 12.666L4.57586 8.91203C4.57586 4.81859 7.89426 1.50019 11.9877 1.50019C16.0811 1.50019 19.3995 4.81858 19.3995 8.91203L19.3995 12.6659Z"
      fill="#9090A0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.49243 20.0298C9.00124 21.469 10.3739 22.5002 11.9874 22.5002C13.6009 22.5002 14.9736 21.469 15.4824 20.0298H8.49243Z"
      fill="#9090A0"
    />
    {isNew && <circle cx="22" cy="2" r="2" fill="#F5656A" />}
  </Svg>
);

export default IconAlarm;
