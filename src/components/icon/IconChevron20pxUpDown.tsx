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

const IconChevron20pxUpDown = ({ direction = 'up', stroke, ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledSvg degree={DIRECTION_DEGREE[direction]} size={20} viewBox="0 0 20 20" {...rest}>
      <path
        d="M14 11.917L10.3536 8.27059C10.1583 8.07532 9.84175 8.07532 9.64649 8.27059L6.00008 11.917"
        stroke={stroke || '#9090A0'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};

export default IconChevron20pxUpDown;

const StyledSvg = styled(Svg)<{ degree: number }>`
  transform: rotate(${({ degree }) => degree}deg);
`;
