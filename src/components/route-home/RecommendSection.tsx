import styled from '@emotion/styled';
import { AnimatePresence, m, Variants } from 'framer-motion';

import { defaultEasing } from '@/constants/motions';
import useToggle from '@/hooks/common/useToggle';

const RecommendSection = () => {
  const [isVisible, _, toggleVisible] = useToggle(true);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <Wrapper drag variants={RecommentSectionVariants} initial="initial" animate="animate" exit="exit">
          <TestButton type="button" onClick={toggleVisible} />

          <SuggestionText>날씨가 부쩍 추워졌어요. 이런 건 어때요?</SuggestionText>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default RecommendSection;

const Wrapper = styled(m.section)(
  {
    position: 'fixed',
    bottom: '54px',
    left: '0',
    width: '100%',
    height: '104px',
    borderRadius: '20px 20px 0 0',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
    padding: theme.size.layoutPadding,
    paddingTop: '12px',
    paddingBottom: '20px',
  }),
);

const TestButton = styled.button({
  all: 'unset',
  width: '20px',
  height: '4px',
  backgroundColor: 'gray',
  borderRadius: '8px',
  alignSelf: 'center',
  marginBottom: '8px',
});

const SuggestionText = styled.p(({ theme }) => ({ ...theme.typographies.caption2, color: theme.colors.gray4 }));

const RecommentSectionVariants: Variants = {
  initial: {
    y: '100%',
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'transform',
  },
  animate: {
    y: '0',
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'transform',
  },
  exit: {
    y: '100%',
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'transform',
  },
};
