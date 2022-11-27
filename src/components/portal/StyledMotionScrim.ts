import styled from '@emotion/styled';
import { m } from 'framer-motion';

const StyledMotionScrim = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;

  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  overflow: hidden;
`;

export default StyledMotionScrim;
