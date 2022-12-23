import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicIdCard = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2627_61534)">
        <path
          d="M1.5625 6.76719C1.5625 5.85592 2.30123 5.11719 3.2125 5.11719H21.9125C22.8238 5.11719 23.5625 5.85592 23.5625 6.76719V18.8672C23.5625 19.7785 22.8238 20.5172 21.9125 20.5172H3.2125C2.30123 20.5172 1.5625 19.7785 1.5625 18.8672V6.76719Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <circle cx="7.90336" cy="12.294" r="1.72367" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
        <path
          d="M11.3473 16.9371C11.3866 17.2104 11.1591 17.4355 10.8829 17.4355C10.2739 17.4355 9.16866 17.4355 7.90625 17.4355C6.64384 17.4355 5.53859 17.4355 4.92956 17.4355C4.65342 17.4355 4.42591 17.2104 4.46516 16.9371C4.70693 15.2532 6.15546 13.959 7.90625 13.959C9.65704 13.959 11.1056 15.2532 11.3473 16.9371Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="13.2734"
          y="11.4355"
          width="7.83594"
          height="1"
          rx="0.5"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="13.2734"
          y="13.5039"
          width="7.83594"
          height="1"
          rx="0.5"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="13.2734"
          y="15.5723"
          width="7.83594"
          height="1"
          rx="0.5"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M1.5625 6.61719C1.5625 5.78876 2.23407 5.11719 3.0625 5.11719H22.0625C22.8909 5.11719 23.5625 5.78876 23.5625 6.61719V8.61719H1.5625V6.61719Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2627_61534">
          <rect width="22" height="15.4" fill="white" transform="translate(1.5625 5.11719)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicIdCard;
