import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicUnderwear = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2515_61442)">
        <path
          d="M21.7969 5.36719H3.79688C2.69231 5.36719 1.79688 6.26262 1.79688 7.36719V10.0102C1.79688 10.425 1.92582 10.8295 2.16585 11.1677L8.09651 19.5247C8.47157 20.0532 9.07946 20.3672 9.72753 20.3672H15.825C16.4709 20.3672 17.0771 20.0553 17.4525 19.5297L23.4243 11.1694C23.6666 10.8301 23.7969 10.4237 23.7969 10.0069V7.36719C23.7969 6.26262 22.9014 5.36719 21.7969 5.36719Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M17.5083 13.4039C19.3986 10.9601 22.4784 10.5085 23.7558 10.6871L16.8761 20.2724C16.4103 18.9585 15.5702 15.9094 17.5083 13.4039Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M8.04639 13.4039C6.15604 10.9601 3.07625 10.5085 1.79892 10.6871L8.67856 20.2724C9.1444 18.9585 9.98453 15.9094 8.04639 13.4039Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2515_61442">
          <rect width="22" height="15" fill="white" transform="translate(1.79688 5.36719)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicUnderwear;
