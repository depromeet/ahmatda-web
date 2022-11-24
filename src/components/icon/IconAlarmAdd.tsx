import Svg, { Props } from '../svg/Svg';

const IconAlarmAdd = ({ ...rest }: Props) => (
  <Svg {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0002 12.5395L19.4282 14.4867C20.2586 15.6191 19.45 17.2148 18.0458 17.2148L5.95422 17.2148C4.55 17.2148 3.74137 15.6191 4.57177 14.4867L5.99988 12.5393L5.99988 9.50027C5.99988 6.18646 8.68626 3.50009 12.0001 3.50009C15.3139 3.50009 18.0003 6.18647 18.0003 9.50027L18.0002 12.5395Z"
      fill="#9090A0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.17053 18.5005C9.58235 19.6658 10.6937 20.5007 12 20.5007C13.3063 20.5007 14.4176 19.6658 14.8294 18.5005H9.17053Z"
      fill="#9090A0"
    />
    <rect x="8.49988" y="9.75" width="7.00021" height="1.50005" rx="0.750023" fill="white" />
    <rect
      x="11.25"
      y="14"
      width="7.00021"
      height="1.50005"
      rx="0.750023"
      transform="rotate(-90 11.25 14)"
      fill="white"
    />
  </Svg>
);

export default IconAlarmAdd;
