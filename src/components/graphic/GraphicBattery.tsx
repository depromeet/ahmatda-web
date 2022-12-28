import { useTheme } from '@emotion/react';

import Svg from '../svg/Svg';

import { GraphicProps } from './type';

const GraphicBattery = ({ isAct = false, ...rest }: GraphicProps) => {
  const theme = useTheme();

  return (
    <Svg {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1132 8.4043V20.5614C22.1132 22.0365 20.8909 23.2322 19.3831 23.2322L10.5113 23.2322C9.00355 23.2322 7.78125 22.0365 7.78125 20.5614V18.1456H9.14629V20.5614C9.14629 21.2989 9.75744 21.8968 10.5113 21.8968H19.3831C20.137 21.8968 20.7482 21.2989 20.7482 20.5614V8.4043H22.1132Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <path
        d="M6.54688 15.9746C6.54688 15.5604 6.88266 15.2246 7.29688 15.2246H9.79688C10.2111 15.2246 10.5469 15.5604 10.5469 15.9746V20.4746C10.5469 20.8888 10.2111 21.2246 9.79688 21.2246H7.29688C6.88266 21.2246 6.54688 20.8888 6.54688 20.4746V15.9746Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <path
        d="M3.04688 3.90039C3.04688 2.79582 3.94231 1.90039 5.04688 1.90039H12.0469C13.1514 1.90039 14.0469 2.79582 14.0469 3.90039V16.9004C14.0469 18.005 13.1514 18.9004 12.0469 18.9004H5.04688C3.94231 18.9004 3.04688 18.005 3.04688 16.9004V3.90039Z"
        fill={isAct ? theme.colors.primary : theme.colors.gray3}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.80989 7.34139C9.27637 7.55828 9.48645 8.12971 9.27913 8.61771L8.93248 9.43368H9.58986C9.90274 9.43368 10.1944 9.59927 10.3649 9.87372C10.5354 10.1482 10.5616 10.4942 10.4345 10.7933L9.5102 12.969C9.30288 13.457 8.75666 13.6767 8.29019 13.4599C7.82372 13.243 7.61364 12.6715 7.82096 12.1835L8.16761 11.3676H7.51022C7.19735 11.3676 6.90571 11.202 6.73522 10.9275C6.56473 10.6531 6.53853 10.307 6.6656 10.0079L7.58989 7.83228C7.79721 7.34428 8.34342 7.1245 8.80989 7.34139Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
      <path d="M20.6641 4.78125H22.1641V7.78125H20.6641V4.78125Z" fill="#FF6C3E" />
      <path
        d="M19.9141 6.14856C19.9141 5.86804 20.1699 5.64062 20.4855 5.64062H22.3426C22.6582 5.64062 22.9141 5.86804 22.9141 6.14856V9.13269C22.9141 9.41321 22.6582 9.64062 22.3426 9.64062H20.4855C20.1699 9.64062 19.9141 9.41321 19.9141 9.13269V6.14856Z"
        fill={isAct ? theme.colors.secondary : theme.colors.gray2}
      />
    </Svg>
  );
};

export default GraphicBattery;