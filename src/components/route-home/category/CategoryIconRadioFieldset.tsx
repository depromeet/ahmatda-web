import { Dispatch, FC, Fragment, MouseEvent, SetStateAction, useId } from 'react';
import styled from '@emotion/styled';

import { Graphic as GraphicType } from '../../graphic/type';

import Graphic from '@/components/graphic/Graphic';

const categoryGraphics: GraphicType[] = [
  'WORK',
  'SCHOOL',
  'FRIENDS',
  'CAMERA',
  'TUBE',
  'BUS',
  'PLANE',
  'RUN',
  'GYM',
  'BOWLING',
  'SWIM',
  'ETC',
];

interface Props {
  currentValue: GraphicType | null;
  setCurrentValue: Dispatch<SetStateAction<GraphicType | null>> | Dispatch<SetStateAction<GraphicType>>;
}

const CategoryIconRadioGroup: FC<Props> = ({ currentValue, setCurrentValue }) => {
  const id = useId();

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value as GraphicType);
  };

  return (
    <fieldset>
      <Legend>아이콘 *</Legend>
      <Wrapper>
        {categoryGraphics.map((type) => (
          <Fragment key={type}>
            <HidedInput type="radio" id={`${type}-${id}`} value={type} onClick={onClick} />
            <GraphicLabel htmlFor={`${type}-${id}`}>
              <Graphic type={type} isAct={type === currentValue} />
            </GraphicLabel>
          </Fragment>
        ))}
      </Wrapper>
    </fieldset>
  );
};

export default CategoryIconRadioGroup;

const Legend = styled.legend(({ theme }) => ({ ...theme.typographies.caption1, color: theme.colors.gray6 }));

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  columnGap: '8px',
});

const HidedInput = styled.input({
  position: 'absolute',
  appearance: 'none',
  clipPath: 'polygon(0 0, 0 0, 0 0)',
});

const GraphicLabel = styled.label({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3rem',
  height: '3rem',
});
