import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicTube = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_1559_49129)">
        <rect x="1" y="1" width="22" height="22" rx="11" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
        <path
          d="M7.0498 1H16.9498L14.1998 8.15H9.7998L7.0498 1Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M16.9502 23L7.0502 23L9.8002 15.85L14.2002 15.85L16.9502 23Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M23 7.0498L23 16.9498L15.85 14.1998L15.85 9.7998L23 7.0498Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M1 16.9502L1 7.0502L8.15 9.8002L8.15 14.2002L1 16.9502Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <rect x="7.875" y="7.875" width="8.25" height="8.25" rx="4.125" fill="white" />
      <defs>
        <clipPath id="clip0_1559_49129">
          <rect x="1" y="1" width="22" height="22" rx="11" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicTube;
