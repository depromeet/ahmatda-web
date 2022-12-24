import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicLipbalm = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        d="M21.1181 4.69689C22.3319 5.05352 22.7216 6.57837 21.8274 7.47293L7.31524 21.9917C6.66447 22.6427 5.60878 22.6433 4.95731 21.993L2.99295 20.032C2.34154 19.3817 2.34093 18.3268 2.99158 17.6757L16.4329 4.22625C16.8643 3.79461 17.4972 3.63307 18.0829 3.80514L21.1181 4.69689Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <path
        d="M9.69531 19.6074L7.33866 21.965C6.68788 22.616 5.63222 22.6166 4.98076 21.9662L3.01482 20.0037C2.36336 19.3533 2.3628 18.2983 3.01358 17.6473L5.37023 15.2897L9.69531 19.6074Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <path
        d="M9.90052 17.0572L11.1368 15.8045L10.7979 15.4706L9.96301 16.3165L8.32326 14.7007L7.92188 15.1074L9.90052 17.0572Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <path d="M9.73687 13.2683L9.33548 13.675L11.3141 15.6248L11.7155 15.2181L9.73687 13.2683Z" fill="#FF916F" />
      <path
        d="M11.9598 14.9706L12.3611 14.5639L11.7162 13.9283L12.064 13.5758C12.5109 13.123 12.4959 12.5947 12.101 12.2056C11.7115 11.8218 11.1812 11.8047 10.7411 12.2507L9.98112 13.0208L11.9598 14.9706ZM11.3855 13.6024L10.7186 12.9453L11.0023 12.6579C11.2418 12.4179 11.4908 12.4306 11.6862 12.6259C11.887 12.8211 11.9073 13.0737 11.6691 13.315L11.3855 13.6024Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
    </Svg>
  );
};

export default GraphicLipbalm;
