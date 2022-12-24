import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicTeeth = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2511_78491)">
        <path
          d="M10.6576 6.91053C13.457 7.66257 15.4663 5.66335 16.3495 4.41659C16.5148 4.18323 16.8657 4.15876 17.0342 4.38978C20.8377 9.6028 15.8617 12.1734 10.9113 12.5429C4.73964 13.0037 0.964042 10.564 2.03142 7.46869C3.32698 3.71167 8.9577 6.45384 10.6576 6.91053Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M2.6875 12.3646C2.6875 11.9162 3.05099 11.5527 3.49938 11.5527H16.4894C16.9378 11.5527 17.3013 11.9162 17.3013 12.3646V17.2359C17.3013 17.6843 16.9378 18.0478 16.4894 18.0478H3.49938C3.05099 18.0478 2.6875 17.6843 2.6875 17.2359V12.3646Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M21.6672 14.9043H23.8359V18.867H21.6611C21.4767 18.867 21.2979 18.9298 21.1539 19.0449L18.5242 21.1487C18.3802 21.2639 18.2013 21.3267 18.017 21.3267H3.4597C2.56292 21.3267 1.83594 20.5997 1.83594 19.7029V18.2441C1.83594 17.7957 2.19943 17.4322 2.64782 17.4322H18.0109C18.1989 17.4322 18.3812 17.3669 18.5265 17.2475L21.1516 15.0891C21.2969 14.9696 21.4791 14.9043 21.6672 14.9043Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.52282 11.5527V15.2062C5.52282 15.4304 5.34107 15.6121 5.11688 15.6121C4.89268 15.6121 4.71094 15.4304 4.71094 15.2062V11.5527H5.52282Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.96032 11.5527V15.2062C7.96032 15.4304 7.77857 15.6121 7.55438 15.6121C7.33018 15.6121 7.14844 15.4304 7.14844 15.2062V11.5527H7.96032Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3978 11.5527V15.2062C10.3978 15.4304 10.2161 15.6121 9.99188 15.6121C9.76768 15.6121 9.58594 15.4304 9.58594 15.2062V11.5527H10.3978Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8275 11.5527V15.2062C12.8275 15.4304 12.6458 15.6121 12.4216 15.6121C12.1974 15.6121 12.0156 15.4304 12.0156 15.2062V11.5527H12.8275Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.265 11.5527V15.2062C15.265 15.4304 15.0833 15.6121 14.8591 15.6121C14.6349 15.6121 14.4531 15.4304 14.4531 15.2062V11.5527H15.265Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2511_78491">
          <rect width="22" height="17.0981" fill="white" transform="translate(1.83594 4.22852)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicTeeth;
