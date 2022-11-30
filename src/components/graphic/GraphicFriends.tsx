import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicFriends = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <circle cx="16.8002" cy="5.3998" r="3.6" fill={isAct ? theme.colors.secondary : theme.colors.gray2} />
      <path
        d="M9.6001 17.3997C9.6001 13.4233 12.8236 10.1997 16.8001 10.1997C20.7765 10.1997 24.0001 13.4233 24.0001 17.3997V19.7997C24.0001 21.1252 22.9256 22.1997 21.6001 22.1997H12.0001C10.6746 22.1997 9.6001 21.1252 9.6001 19.7997V17.3997Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <circle cx="7.2001" cy="5.3998" r="3.6" fill={isAct ? theme.colors.primary : theme.colors.gray3} />
      <path
        d="M0 17.3997C0 13.4233 3.22355 10.1997 7.2 10.1997C11.1764 10.1997 14.4 13.4233 14.4 17.3997V19.7997C14.4 21.1252 13.3255 22.1997 12 22.1997H2.4C1.07452 22.1997 0 21.1252 0 19.7997V17.3997Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
    </Svg>
  );
};

export default GraphicFriends;
