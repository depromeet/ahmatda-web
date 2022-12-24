import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicWallet = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2511_78271)">
        <path
          d="M1.9375 6.0926C1.9375 5.64774 2.29813 5.28711 2.74299 5.28711H21.7224C22.1673 5.28711 22.5279 5.64774 22.5279 6.0926V18.3764C22.5279 18.8212 22.1673 19.1818 21.7224 19.1818H2.74299C2.29813 19.1818 1.9375 18.8212 1.9375 18.3764V6.0926Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M17.0938 12.26C17.0938 10.9115 18.1869 9.81836 19.5354 9.81836H23.4138C23.7046 9.81836 23.9404 10.0542 23.9404 10.345V14.175C23.9404 14.4659 23.7046 14.7017 23.4138 14.7017H19.5354C18.1869 14.7017 17.0938 13.6085 17.0938 12.26Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M20.9659 12.2603C20.9659 12.9693 20.3912 13.5441 19.6822 13.5441C18.9732 13.5441 18.3984 12.9693 18.3984 12.2603C18.3984 11.5513 18.9732 10.9766 19.6822 10.9766C20.3912 10.9766 20.9659 11.5513 20.9659 12.2603Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2511_78271">
          <rect width="22" height="13.8947" fill="white" transform="translate(1.9375 5.28711)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicWallet;
