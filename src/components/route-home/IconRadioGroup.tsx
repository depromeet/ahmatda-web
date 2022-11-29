import { cloneElement, Dispatch, FC, Fragment, MouseEvent, ReactElement, SetStateAction, useId } from 'react';
import styled from '@emotion/styled';

import GraphicBowling from '../graphic/GraphicBowling';
import GraphicBus from '../graphic/GraphicBus';
import GraphicCamera from '../graphic/GraphicCamera';
import GraphicEtc from '../graphic/GraphicEtc';
import GraphicFriends from '../graphic/GraphicFriends';
import GraphicGym from '../graphic/GraphicGym';
import GraphicPlane from '../graphic/GraphicPlane';
import GraphicRun from '../graphic/GraphicRun';
import GraphicSchool from '../graphic/GraphicSchool';
import GraphicSwim from '../graphic/GraphicSwim';
import GraphicTube from '../graphic/GraphicTube';
import GraphicWork from '../graphic/GraphicWork';

interface Graphic {
  value: string;
  reactElement: ReactElement;
}

const GRAPHICS: Graphic[] = [
  { value: 'bowling', reactElement: <GraphicBowling /> },
  { value: 'bus', reactElement: <GraphicBus /> },
  { value: 'camera', reactElement: <GraphicCamera /> },
  { value: 'etc', reactElement: <GraphicEtc /> },
  { value: 'friends', reactElement: <GraphicFriends /> },
  { value: 'gym', reactElement: <GraphicGym /> },
  { value: 'plane', reactElement: <GraphicPlane /> },
  { value: 'run', reactElement: <GraphicRun /> },
  { value: 'school', reactElement: <GraphicSchool /> },
  { value: 'swim', reactElement: <GraphicSwim /> },
  { value: 'tube', reactElement: <GraphicTube /> },
  { value: 'work', reactElement: <GraphicWork /> },
];

interface Props {
  currentValue: string | null;
  setCurrentValue: Dispatch<SetStateAction<string | null>>;
}

const IconRadioGroup: FC<Props> = ({ currentValue, setCurrentValue }) => {
  const id = useId();

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
  };

  return (
    <Wrapper>
      {GRAPHICS.map(({ value, reactElement }) => (
        <Fragment key={value}>
          <HidedInput type="radio" id={`${value}-${id}`} value={value} onClick={onClick} />
          <GraphicLabel htmlFor={`${value}-${id}`}>
            {cloneElement(reactElement, { isAct: value === currentValue })}
          </GraphicLabel>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default IconRadioGroup;

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
