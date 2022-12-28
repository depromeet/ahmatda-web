import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicTissue = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        d="M5.41598 6.27772L8.9375 14.4732H17.0729L20.5505 6.27067C20.8686 5.52022 20.2035 4.7248 19.4086 4.90512L17.173 5.41222C16.5358 5.55674 15.8683 5.38097 15.385 4.94144L13.672 3.38368C13.293 3.0391 12.715 3.03651 12.333 3.37768L10.5659 4.95595C10.0834 5.38692 9.42221 5.55785 8.79126 5.41474L6.55597 4.90771C5.75888 4.7269 5.09331 5.52678 5.41598 6.27772Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <rect
        x="1.89062"
        y="11.0234"
        width="22"
        height="11.7544"
        rx="2"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <ellipse
        cx="12.8932"
        cy="16.901"
        rx="5.29948"
        ry="2.69006"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
    </Svg>
  );
};

export default GraphicTissue;
