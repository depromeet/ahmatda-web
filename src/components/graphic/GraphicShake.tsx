import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicShake = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2604_61141)">
        <path
          d="M16.6066 1.77815L11.0724 19.8935C11.0321 20.0256 11.1064 20.1653 11.2385 20.2057L12.2703 20.5209C12.4024 20.5612 12.5421 20.4869 12.5825 20.3548L18.1167 2.23947C18.157 2.10743 18.0827 1.96768 17.9506 1.92734L16.9188 1.6121C16.7867 1.57176 16.647 1.64611 16.6066 1.77815Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M16.4879 24.0957H10.211C9.72725 24.0957 9.31287 23.7495 9.2269 23.2734L8.80232 20.9227L7.52658 13.8596L6.71094 9.34375H19.2438L18.6699 13.8596L17.7721 20.9227L17.4799 23.2218C17.4164 23.7213 16.9914 24.0957 16.4879 24.0957Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M18.6296 7.21289H7.02662C6.6505 7.21289 6.30618 7.42395 6.1355 7.75912L5.69826 8.61779C5.52887 8.95044 5.77052 9.34467 6.14382 9.34467H19.5124C19.8857 9.34467 20.1274 8.95044 19.958 8.61779L19.5207 7.75912C19.3501 7.42395 19.0058 7.21289 18.6296 7.21289Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M18.6667 13.8594H7.52344L8.79917 20.9225H17.769L18.6667 13.8594Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2604_61141">
          <rect width="15" height="22.5566" fill="white" transform="translate(5.32812 1.53906)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicShake;
