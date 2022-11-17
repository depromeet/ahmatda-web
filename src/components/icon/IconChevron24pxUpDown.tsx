import styled from '@emotion/styled';

import Svg, { Props as SvgProps } from '../svg/Svg';

type Direction = 'up' | 'down';

const DIRECTION_DEGREE: { [K in Direction]: number } = { up: 0, down: 180 };

interface Props extends SvgProps {
  /**
   * @default `up`
   */
  direction?: Direction;
}

const IconChevron24pxUpDown = ({ direction = 'up', ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledSvg degree={DIRECTION_DEGREE[direction]} {...rest}>
      <path
        d="M18 14.8999L12.3536 9.25346C12.1583 9.05819 11.8417 9.05819 11.6464 9.25345L6 14.8999"
        stroke="#9090A0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};

export default IconChevron24pxUpDown;

const StyledSvg = styled(Svg)<{ degree: number }>`
  transform: rotate(${({ degree }) => degree}deg);
`;
