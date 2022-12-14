import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicCard = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2019_51103)">
        <path
          d="M1.96094 6.12266C1.96094 5.21139 2.69967 4.47266 3.61094 4.47266H22.3109C23.2222 4.47266 23.9609 5.21139 23.9609 6.12266V18.2227C23.9609 19.1339 23.2222 19.8727 22.3109 19.8727H3.61094C2.69967 19.8727 1.96094 19.1339 1.96094 18.2227V6.12266Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M1.96094 7.47266H23.9609V10.4727H1.96094V7.47266Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M22.3142 16.0848C22.3142 17.2589 21.3624 18.2107 20.1883 18.2107C19.0143 18.2107 18.0625 17.2589 18.0625 16.0848C18.0625 14.9108 19.0143 13.959 20.1883 13.959C21.3624 13.959 22.3142 14.9108 22.3142 16.0848Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1883 17.7107C21.0863 17.7107 21.8142 16.9828 21.8142 16.0848C21.8142 15.1869 21.0863 14.459 20.1883 14.459C19.2904 14.459 18.5625 15.1869 18.5625 16.0848C18.5625 16.9828 19.2904 17.7107 20.1883 17.7107ZM20.1883 18.2107C21.3624 18.2107 22.3142 17.2589 22.3142 16.0848C22.3142 14.9108 21.3624 13.959 20.1883 13.959C19.0143 13.959 18.0625 14.9108 18.0625 16.0848C18.0625 17.2589 19.0143 18.2107 20.1883 18.2107Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M19.322 16.0848C19.322 17.2589 18.3702 18.2107 17.1962 18.2107C16.0221 18.2107 15.0703 17.2589 15.0703 16.0848C15.0703 14.9108 16.0221 13.959 17.1962 13.959C18.3702 13.959 19.322 14.9108 19.322 16.0848Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1962 17.7107C18.0941 17.7107 18.822 16.9828 18.822 16.0848C18.822 15.1869 18.0941 14.459 17.1962 14.459C16.2982 14.459 15.5703 15.1869 15.5703 16.0848C15.5703 16.9828 16.2982 17.7107 17.1962 17.7107ZM17.1962 18.2107C18.3702 18.2107 19.322 17.2589 19.322 16.0848C19.322 14.9108 18.3702 13.959 17.1962 13.959C16.0221 13.959 15.0703 14.9108 15.0703 16.0848C15.0703 17.2589 16.0221 18.2107 17.1962 18.2107Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2019_51103">
          <rect width="22" height="15.4" fill="white" transform="translate(1.96094 4.47266)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicCard;
