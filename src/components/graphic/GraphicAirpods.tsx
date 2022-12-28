import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicAirpods = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2019_51152)">
        <g clipPath="url(#clip1_2019_51152)">
          <path
            d="M2.10938 9.77344L5.72561 9.19056L7.18281 18.2311C7.34377 19.2297 6.66473 20.1697 5.66613 20.3307C4.66754 20.4916 3.72754 19.8126 3.56658 18.814L2.10938 9.77344Z"
            fill={isAct ? theme.colors.secondary : theme.colors.gray2}
          />
          <circle
            cx="6.89415"
            cy="9.23518"
            r="4.80756"
            transform="rotate(-9.15645 6.89415 9.23518)"
            fill={isAct ? theme.colors.primary : theme.colors.gray3}
          />
          <rect
            x="3.67969"
            y="8.93164"
            width="3.45306"
            height="1.91837"
            rx="0.959184"
            transform="rotate(-9.16 3.67969 8.93164)"
            fill={isAct ? theme.colors.secondary : theme.colors.gray2}
          />
          <path
            d="M23.6719 9.77344L20.0556 9.19056L18.5984 18.2311C18.4375 19.2297 19.1165 20.1697 20.1151 20.3307C21.1137 20.4916 22.0537 19.8126 22.2147 18.814L23.6719 9.77344Z"
            fill={isAct ? theme.colors.secondary : theme.colors.gray2}
          />
          <circle
            r="4.80756"
            transform="matrix(-0.987257 -0.159131 -0.159131 0.987257 18.8871 9.23518)"
            fill={isAct ? theme.colors.primary : theme.colors.gray3}
          />
          <rect
            width="3.45306"
            height="1.91837"
            rx="0.959184"
            transform="matrix(-0.987248 -0.159192 -0.159192 0.987248 22.1016 8.93164)"
            fill={isAct ? theme.colors.secondary : theme.colors.gray2}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2019_51152">
          <rect width="24" height="24" fill="white" transform="translate(0.890625 0.171875)" />
        </clipPath>
        <clipPath id="clip1_2019_51152">
          <rect width="23.0147" height="16.8987" fill="white" transform="translate(1.38281 3.72266)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicAirpods;
