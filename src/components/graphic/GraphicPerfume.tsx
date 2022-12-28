import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicPerfume = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <g clipPath="url(#clip0_2511_78379)">
        <path
          d="M12.3594 4.34766H16.4949V5.47948H12.3594V4.34766Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M22.8882 5.04385C22.8882 6.58253 21.173 7.82988 19.0574 7.82988C16.9417 7.82988 15.2266 6.58253 15.2266 5.04385C15.2266 3.50516 16.9417 2.25781 19.0574 2.25781C21.173 2.25781 22.8882 3.50516 22.8882 5.04385Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M8.51562 2.99729C8.51562 2.61262 8.82746 2.30078 9.21213 2.30078H12.3791C12.7637 2.30078 13.0756 2.61262 13.0756 2.99729V6.5669C13.0756 6.95157 12.7637 7.2634 12.3791 7.2634H9.21213C8.82746 7.2634 8.51562 6.95157 8.51562 6.5669V2.99729Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
        <path
          d="M9.73543 3.38867C10.0239 3.38867 10.2578 3.62255 10.2578 3.91105L10.2578 4.95582C10.2578 5.24432 10.0239 5.4782 9.73543 5.4782C9.44693 5.4782 9.21305 5.24432 9.21305 4.95582L9.21305 3.91105C9.21305 3.62255 9.44693 3.38867 9.73543 3.38867Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M7.4375 7.13206C7.4375 6.74738 7.74934 6.43555 8.13401 6.43555H13.4449C13.8296 6.43555 14.1414 6.74738 14.1414 7.13206V10.7017C14.1414 11.0863 13.8296 11.3982 13.4449 11.3982H8.13401C7.74934 11.3982 7.4375 11.0863 7.4375 10.7017V7.13206Z"
          fill={isAct ? theme.colors.secondary : theme.colors.gray2}
        />
        <path
          d="M10.7916 8.91797C6.42803 8.91797 2.89062 12.4554 2.89062 16.819C2.89062 18.6184 3.49213 20.2772 4.50502 21.6055C4.74533 21.9207 5.12822 22.0855 5.52453 22.0855H16.0588C16.4551 22.0855 16.838 21.9207 17.0783 21.6055C18.0912 20.2772 18.6927 18.6184 18.6927 16.819C18.6927 12.4554 15.1553 8.91797 10.7916 8.91797Z"
          fill={isAct ? theme.colors.primary : theme.colors.gray3}
        />
      </g>
      <defs>
        <clipPath id="clip0_2511_78379">
          <rect width="20" height="19.8286" fill="white" transform="translate(2.89062 2.25781)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default GraphicPerfume;
