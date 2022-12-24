import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicTowel = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2515_61485)">
        <path
          d="M4.41406 6.05078C4.41406 4.94621 5.30949 4.05078 6.41406 4.05078H9.16055C9.4367 4.05078 9.66056 4.27464 9.66056 4.55078V18.6289C9.66056 18.9051 9.4367 19.1289 9.16056 19.1289H4.91406C4.63792 19.1289 4.41406 18.9051 4.41406 18.6289V6.05078Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M21.2828 5.94707H3.67759C3.40145 5.94707 3.17759 5.72322 3.17759 5.44707V5.30078C3.17759 5.02464 2.95373 4.80078 2.67759 4.80078H1.91406C1.63792 4.80078 1.41406 5.02464 1.41406 5.30078V8.53325C1.41406 8.80939 1.63792 9.03325 1.91406 9.03325H2.67759C2.95373 9.03325 3.17759 8.80939 3.17759 8.53325V8.25469C3.17759 7.97855 3.40145 7.75469 3.67759 7.75469H21.2828C21.5589 7.75469 21.7828 7.97855 21.7828 8.25469V8.53325C21.7828 8.80939 22.0067 9.03325 22.2828 9.03325H22.9141C23.1902 9.03325 23.4141 8.80939 23.4141 8.53325V5.30078C23.4141 5.02464 23.1902 4.80078 22.9141 4.80078H22.2828C22.0067 4.80078 21.7828 5.02464 21.7828 5.30078V5.44707C21.7828 5.72322 21.5589 5.94707 21.2828 5.94707Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M19.6695 21.1861V6.05078C19.6695 4.94621 18.7741 4.05078 17.6695 4.05078H7.03125C6.75511 4.05078 6.53125 4.27464 6.53125 4.55078V21.1861C6.53125 21.4622 6.75511 21.6861 7.03125 21.6861H19.1695C19.4457 21.6861 19.6695 21.4622 19.6695 21.1861Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          x="6.53125"
          y="16.3066"
          width="13.1383"
          height="1.41082"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="6.53125"
          y="13.6621"
          width="13.1383"
          height="1.41082"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2515_61485">
          <rect width="22" height="17.6353" fill="white" transform="translate(1.41406 4.05078)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicTowel;
