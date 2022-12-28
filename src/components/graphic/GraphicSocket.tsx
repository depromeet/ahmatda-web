import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicSocket = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2627_61451)">
        <rect
          x="7.90625"
          y="1.81641"
          width="1.50117"
          height="5.47949"
          rx="0.25"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="16.0859"
          y="1.81641"
          width="1.50117"
          height="5.47949"
          rx="0.25"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="5.72656"
          y="6.50781"
          width="14"
          height="6.82476"
          rx="1"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M7.86719 13.334H17.5921V16.5338C17.5921 17.0861 17.1444 17.5338 16.5921 17.5338H8.86719C8.3149 17.5338 7.86719 17.0861 7.86719 16.5338V13.334Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M9.98438 17.5332H15.4669V18.141C15.4669 18.6932 15.0192 19.141 14.4669 19.141H10.9844C10.4321 19.141 9.98438 18.6932 9.98438 18.141V17.5332Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          x="11.5078"
          y="18.3359"
          width="2.43124"
          height="5.47949"
          rx="0.5"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2627_61451">
          <rect width="14" height="21.999" fill="white" transform="translate(5.72656 1.81641)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicSocket;
