import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicPC = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2019_51139)">
        <path
          d="M1.92969 5.02187C1.92969 4.41436 2.42217 3.92188 3.02969 3.92188H22.8297C23.4372 3.92188 23.9297 4.41436 23.9297 5.02188V17.1219C23.9297 17.7294 23.4372 18.2219 22.8297 18.2219H3.02969C2.42217 18.2219 1.92969 17.7294 1.92969 17.1219V5.02187Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M1.92969 19.3227C1.92969 18.7151 2.42217 18.2227 3.02969 18.2227H22.8297C23.4372 18.2227 23.9297 18.7151 23.9297 19.3227C23.9297 19.9302 23.4372 20.4227 22.8297 20.4227H3.02969C2.42217 20.4227 1.92969 19.9302 1.92969 19.3227Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M10.6406 18.4141H15.0406C15.0406 18.7178 14.7944 18.9641 14.4906 18.9641H11.1906C10.8869 18.9641 10.6406 18.7178 10.6406 18.4141Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M12.9689 9.98338C13.0182 9.6781 13.269 9.0556 13.8776 9.00781C13.8776 9.26664 13.6958 9.8241 12.9689 9.98338Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M12.0602 10.0829C12.672 9.98338 12.9407 10.2687 12.9689 10.3617C13.6958 9.74845 14.4325 10.1592 14.7099 10.4413C13.8223 11.2536 14.4387 12.0274 14.8578 12.3128C14.7381 12.6778 14.3744 13.4078 13.8776 13.4078C13.2566 13.4078 13.4525 13.1092 12.6706 13.3481C11.8887 13.587 11.4262 13.0494 11.1093 12.0938C10.7923 11.1381 11.2481 10.2151 12.0602 10.0829Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2019_51139">
          <rect width="22" height="16.5" fill="white" transform="translate(1.92969 3.92188)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicPC;
