import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicCamera = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <rect
        x="0.5"
        y="5.6748"
        width="23"
        height="16.1001"
        rx="3.45001"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <ellipse cx="12" cy="13.7246" rx="5.75" ry="5.75003" fill={isAct ? theme.colors.primary : theme.colors.gray3} />
      <ellipse cx="11.9998" cy="13.7244" rx="3.45" ry="3.45002" fill="white" />
      <rect
        x="17.75"
        y="7.97461"
        width="3.45"
        height="1.15001"
        rx="0.575003"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <path
        d="M6.50724 2.86081C6.70205 2.4712 7.10025 2.2251 7.53584 2.2251H16.4644C16.8999 2.2251 17.2981 2.4712 17.4929 2.86081L18.9001 5.67512H5.1001L6.50724 2.86081Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
    </Svg>
  );
};

export default GraphicCamera;
