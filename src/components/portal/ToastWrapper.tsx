import styled from '@emotion/styled';
import { AnimatePresence, m } from 'framer-motion';

import { defaultFadeInUpVariants } from '@/constants/motions';
import useToast from '@/store/toast/useToast';

const ToastWrapper = () => {
  const { toast } = useToast();
  const isHaveIcon = Boolean(toast?.iconElement);

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
            isHaveIcon={isHaveIcon}
          >
            {isHaveIcon && toast.iconElement}
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

const MotionToastMessage = styled(m.div)<{ isHaveIcon: boolean }>(
  {
    width: '100%',
    minHeight: '48px',
    borderRadius: '8px',
    display: 'flex',
    gap: '8px',
  },
  ({ theme }) => ({ ...theme.typographies.caption1, backgroundColor: theme.colors.black, color: theme.colors.white }),
  ({ isHaveIcon }) => ({ padding: isHaveIcon ? '12px 16px' : '12px 18px' }),
);
