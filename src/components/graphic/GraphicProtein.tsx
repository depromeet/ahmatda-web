import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicProtein = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2604_61149)">
        <rect
          x="6.80469"
          y="3.63477"
          width="11.3123"
          height="2.64"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="4.59375"
          y="5.51172"
          width="15.7447"
          height="18.304"
          rx="2"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M6.28125 3.81641C6.28125 2.71184 7.17668 1.81641 8.28125 1.81641H16.6521C17.7566 1.81641 18.6521 2.71184 18.6521 3.81641V3.95641C18.6521 4.23255 18.4282 4.45641 18.1521 4.45641H6.78125C6.50511 4.45641 6.28125 4.23255 6.28125 3.95641V3.81641Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          x="4.59375"
          y="8.21094"
          width="15.7447"
          height="13.024"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M9.71875 18.3314H11.2381V15.941H12.5548C14.2464 15.941 15.2188 14.9331 15.2188 13.4695C15.2188 12.0261 14.2616 10.998 12.5954 10.998H9.71875V18.3314ZM11.2381 14.7154V12.2439H12.3118C13.2132 12.249 13.6538 12.7402 13.6488 13.4695C13.6538 14.2089 13.2132 14.7154 12.3118 14.7154H11.2381Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2604_61149">
          <rect width="15.7447" height="22" fill="white" transform="translate(4.59375 1.81641)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicProtein;
