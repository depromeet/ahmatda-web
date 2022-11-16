import styled from '@emotion/styled';

import Svg, { Props as SvgProps } from '../svg/Svg';

type Direction = 'right' | 'left';

const DIRECTION_DEGREE: { [K in Direction]: number } = { right: 0, left: 180 };

interface Props extends SvgProps {
  /**
   * @default `right`
   */
  direction?: Direction;
}

const IconChevron24pxRightLeft = ({ direction = 'right', ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledSvg degree={DIRECTION_DEGREE[direction]} {...rest}>
      <path
        d="M10 19L16.6464 12.3536C16.8417 12.1583 16.8417 11.8417 16.6464 11.6464L10 5"
        stroke="#626273"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};

export default IconChevron24pxRightLeft;

const StyledSvg = styled(Svg)<{ degree: number }>`
  transform: rotate(${({ degree }) => degree}deg);
`;
