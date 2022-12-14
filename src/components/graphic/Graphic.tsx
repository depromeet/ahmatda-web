import { createElement, FC } from 'react';

import GraphicBowling from './GraphicBowling';
import GraphicBus from './GraphicBus';
import GraphicCamera from './GraphicCamera';
import GraphicEmptyCard from './GraphicEmptyCard';
import GraphicEtc from './GraphicEtc';
import GraphicFriends from './GraphicFriends';
import GraphicGym from './GraphicGym';
import GraphicPlane from './GraphicPlane';
import GraphicRun from './GraphicRun';
import GraphicSchool from './GraphicSchool';
import GraphicSwim from './GraphicSwim';
import GraphicTube from './GraphicTube';
import GraphicWork from './GraphicWork';
import { Graphic, GraphicProps } from './type';

const graphicElement = (type: Graphic) => {
  switch (type) {
    case 'BOWLING':
      return GraphicBowling;
    case 'BUS':
      return GraphicBus;
    case 'CAMERA':
      return GraphicCamera;
    case 'EMPTYCARD':
      return GraphicEmptyCard;
    case 'ETC':
      return GraphicEtc;
    case 'FRIENDS':
      return GraphicFriends;
    case 'GYM':
      return GraphicGym;
    case 'PLANE':
      return GraphicPlane;
    case 'RUN':
      return GraphicRun;
    case 'SCHOOL':
      return GraphicSchool;
    case 'SWIM':
      return GraphicSwim;
    case 'TUBE':
      return GraphicTube;
    case 'WORK':
      return GraphicWork;
    default:
      return GraphicEtc;
  }
};

interface Props extends GraphicProps {
  type: Graphic;
}

const Graphic: FC<Props> = ({ type, isAct, ...rest }) => {
  return createElement(graphicElement(type), { isAct, ...rest });
};

export default Graphic;
