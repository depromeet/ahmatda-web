import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicTumbler = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2512_61394)">
        <rect
          x="10.5391"
          y="5.52734"
          width="4.59272"
          height="1.87537"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <rect
          x="10.5391"
          y="4.80664"
          width="4.59272"
          height="0.721295"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M7.92188 11.4706C7.92188 8.75993 10.1193 6.5625 12.83 6.5625C15.5406 6.5625 17.7381 8.75993 17.7381 11.4706V22.2774C17.7381 23.1059 17.0665 23.7774 16.2381 23.7774H9.42188C8.59345 23.7774 7.92188 23.1059 7.92188 22.2774V11.4706Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5156 4.80678H15.1083L14.7728 3.33325C14.5655 2.42308 13.7562 1.77734 12.8227 1.77734H12.692C11.7017 1.77734 10.8605 2.50199 10.714 3.48134L10.5156 4.80678ZM12.8125 4.80664C13.3216 4.80664 13.7344 4.39005 13.7344 3.87617C13.7344 3.36229 13.3216 2.9457 12.8125 2.9457C12.3034 2.9457 11.8906 3.36229 11.8906 3.87617C11.8906 4.39005 12.3034 4.80664 12.8125 4.80664Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <rect
          width="0.819077"
          height="4.45665"
          rx="0.409538"
          transform="matrix(0.368349 -0.929688 0.992682 0.12076 13.3203 4.13477)"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
      </g>
      <defs>
        <clipPath id="clip0_2512_61394">
          <rect width="10.1242" height="22.0001" fill="white" transform="translate(7.92188 1.77734)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicTumbler;
