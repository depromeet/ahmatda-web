import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicSwim = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.71018 14.7598H6.2531L6.25137 14.763C6.55081 14.767 6.85677 14.7961 7.16617 14.8521C9.75986 15.3218 11.6139 17.5065 11.3073 19.7317C11.0007 21.9569 8.64961 23.3799 6.05592 22.9102C4.72345 22.6689 3.58619 21.9749 2.8368 21.0554L2.82808 21.0715L1.13458 18.7282C1.04709 18.6072 1 18.4616 1 18.3122V15.4699C1 15.0777 1.31796 14.7598 1.71018 14.7598ZM6.62815 21.498C8.31317 21.8032 9.84061 20.8787 10.0398 19.4331C10.239 17.9875 9.03446 16.5682 7.34944 16.263C5.66442 15.9578 4.13698 16.8823 3.9378 18.328C3.73863 19.7736 4.94314 21.1929 6.62815 21.498Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2898 14.7598H17.7469L17.7486 14.763C17.4492 14.767 17.1432 14.7961 16.8338 14.8521C14.2401 15.3218 12.3861 17.5065 12.6927 19.7317C12.9993 21.9569 15.3504 23.3799 17.9441 22.9102C19.2765 22.6689 20.4138 21.9749 21.1632 21.0554L21.1719 21.0715L22.8654 18.7282C22.9529 18.6072 23 18.4616 23 18.3122V15.4699C23 15.0777 22.682 14.7598 22.2898 14.7598ZM17.3718 21.498C15.6868 21.8032 14.1594 20.8787 13.9602 19.4331C13.761 17.9875 14.9655 16.5682 16.6506 16.263C18.3356 15.9578 19.863 16.8823 20.0622 18.328C20.2614 19.7736 19.0569 21.1929 17.3718 21.498Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <rect
        x="10.729"
        y="18.9038"
        width="2.52149"
        height="1.58998"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <path
        d="M23 11.7247C21.8653 11.7247 18.0798 11.7247 12.0105 11.7247C5.94116 11.7247 2.36579 11.7247 1.021 11.7247C1.021 5.80163 5.94116 1 12.0105 1C18.0798 1 23 5.80163 23 11.7247Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <mask
        id="mask0_1559_49126"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="22"
        height="11"
      >
        <path
          d="M22.979 11.7247C21.8443 11.7247 18.0588 11.7247 11.9895 11.7247C5.92016 11.7247 2.34479 11.7247 1 11.7247C1 5.80163 5.92016 1 11.9895 1C18.0588 1 22.979 5.80163 22.979 11.7247Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </mask>
      <g mask="url(#mask0_1559_49126)">
        <rect
          x="11.5918"
          y="11.7251"
          width="1.3349"
          height="10.7247"
          transform="rotate(-180 11.5918 11.7251)"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          x="14.2559"
          y="11.7251"
          width="1.3349"
          height="10.7247"
          transform="rotate(-180 14.2559 11.7251)"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
    </Svg>
  );
};

export default GraphicSwim;
