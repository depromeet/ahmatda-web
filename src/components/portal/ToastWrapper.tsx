import styled from '@emotion/styled';
import { AnimatePresence, m } from 'framer-motion';

import { defaultFadeInUpVariants } from '@/constants/motions';
import useToast from '@/store/toast/useToast';

const ToastWrapper = () => {
  const { toast } = useToast();

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        {toast && (
          <MotionToastMessage
            key={toast.content}
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {toast.content}
          </MotionToastMessage>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ToastWrapper;

const BOTTOM = '40px';

const Wrapper = styled.div(
  {
    position: 'fixed',
    bottom: BOTTOM,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    zIndex: '9999',
  },
  ({ theme }) => ({ maxWidth: theme.size.maxWidth, padding: theme.size.layoutPadding }),
);

const MotionToastMessage = styled(m.div)(
  {
    width: '100%',
    height: '48px',
    padding: '12px 38px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  ({ theme }) => ({ ...theme.typographies.caption1, backgroundColor: theme.colors.gray5, color: theme.colors.white }),
);
