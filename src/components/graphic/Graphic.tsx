import { createElement, FC } from 'react';

import Graphic10Kg from './Graphic10Kg';
import GraphicAirpods from './GraphicAirpods';
import GraphicAppleWatch from './GraphicAppleWatch';
import GraphicBattery from './GraphicBattery';
import GraphicBowling from './GraphicBowling';
import GraphicBus from './GraphicBus';
import GraphicCamera from './GraphicCamera';
import GraphicCard from './GraphicCard';
import GraphicCarrier from './GraphicCarrier';
import GraphicCharger from './GraphicCharger';
import GraphicCurlingIron from './GraphicCurlingIron';
import GraphicEtc from './GraphicEtc';
import GraphicEyeDrops from './GraphicEyeDrops';
import GraphicFriends from './GraphicFriends';
import GraphicGlasses from './GraphicGlasses';
import GraphicGym from './GraphicGym';
import GraphicHandBag from './GraphicHandbag';
import GraphicHeadband from './GraphicHeadband';
import GraphicHeadphones from './GraphicHeadphones';
import GraphicIdCard from './GraphicIdCard';
import GraphicKey from './GraphicKey';
import GraphicLipbalm from './GraphicLipbalm';
import GraphicMask from './GraphicMask';
import GraphicMat from './GraphicMat';
import GraphicPassport from './GraphicPassport';
import GraphicPC from './GraphicPC';
import GraphicPerfume from './GraphicPerfume';
import GraphicPill from './GraphicPill';
import GraphicPlane from './GraphicPlane';
import GraphicPouch from './GraphicPouch';
import GraphicProtein from './GraphicProtein';
import GraphicRoaming from './GraphicRoaming';
import GraphicRun from './GraphicRun';
import GraphicSchool from './GraphicSchool';
import GraphicShake from './GraphicShake';
import GraphicSocket from './GraphicSocket';
import GraphicSportSwear from './GraphicSportSwear';
import GraphicStrap from './GraphicStrap';
import GraphicSunglasses from './GraphicSunglasses';
import GraphicSwim from './GraphicSwim';
import GraphicTeeth from './GraphicTeeth';
import GraphicTissue from './GraphicTissue';
import GraphicToescoks from './GraphicToescoks';
import GraphicToiletries from './GraphicToiletries';
import GraphicTowel from './GraphicTowel';
import GraphicTube from './GraphicTube';
import GraphicTumbler from './GraphicTumbler';
import GraphicUnderwear from './GraphicUnderwear';
import GraphicWallet from './GraphicWallet';
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
    case '10KG':
      return Graphic10Kg;
    case 'CARD':
      return GraphicCard;
    case 'PC':
      return GraphicPC;
    case 'AIRPODS':
      return GraphicAirpods;
    case 'HANDBAG':
      return GraphicHandBag;
    case 'LIPBALM':
      return GraphicLipbalm;
    case 'APPLEWATCH':
      return GraphicAppleWatch;
    case 'BATTERY':
      return GraphicBattery;
    case 'CARRIER':
      return GraphicCarrier;
    case 'CHARGER':
      return GraphicCharger;
    case 'CURLINGIRON':
      return GraphicCurlingIron;
    case 'EYEDROPS':
      return GraphicEyeDrops;
    case 'GLASSES':
      return GraphicGlasses;
    case 'HEADBAND':
      return GraphicHeadband;
    case 'HEADPHONES':
      return GraphicHeadphones;
    case 'IDCARD':
      return GraphicIdCard;
    case 'KEY':
      return GraphicKey;
    case 'MASK':
      return GraphicMask;
    case 'MAT':
      return GraphicMat;
    case 'PASSPORT':
      return GraphicPassport;
    case 'PERFUME':
      return GraphicPerfume;
    case 'PILL':
      return GraphicPill;
    case 'POUCH':
      return GraphicPouch;
    case 'PROTEIN':
      return GraphicProtein;
    case 'ROAMING':
      return GraphicRoaming;
    case 'SHAKE':
      return GraphicShake;
    case 'SOCKET':
      return GraphicSocket;
    case 'SPORTSWEAR':
      return GraphicSportSwear;
    case 'STRAP':
      return GraphicStrap;
    case 'SUNGLASSES':
      return GraphicSunglasses;
    case 'TEETH':
      return GraphicTeeth;
    case 'TISSUE':
      return GraphicTissue;
    case 'TOESCOKS':
      return GraphicToescoks;
    case 'TOILETRIES':
      return GraphicToiletries;
    case 'TOWEL':
      return GraphicTowel;
    case 'TUMBLER':
      return GraphicTumbler;
    case 'UNDERWEAR':
      return GraphicUnderwear;
    case 'WALLET':
      return GraphicWallet;

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
