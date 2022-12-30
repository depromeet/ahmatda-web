import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, DragHandlers, m, useAnimationControls } from 'framer-motion';

import LoadingHandler from '../loading/LoadingHandler';
import Tag from '../tag/Tag';

import { defaultEasing } from '@/constants/motions';
import useGetRecommendItem from '@/hooks/api/recommend-item/useGetRecommendItem';
import useToggle from '@/hooks/common/useToggle';
import useDidUpdate from '@/hooks/life-cycle/useDidUpdate';

const HIDE_BOTTOM_POS = 84;

const RecommendSection = () => {
  const { onDragStart, onDragEnd, onClickToggleButton, animationControls } = useSectionVisible();

  const { items, isLoading, onClickDelete } = useRecommendItem();

  return (
    <AnimatePresence mode="wait">
      <Wrapper
        animate={animationControls}
        drag="y"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{ top: 0, bottom: HIDE_BOTTOM_POS }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <DragHandlerButton type="button" onClick={onClickToggleButton}>
          <DragHandlerSpan />
        </DragHandlerButton>

        <LoadingHandler isLoading={isLoading} fallback={undefined}>
          <SuggestionText>이런 건 어때요?</SuggestionText>

          <ItemWrapper>
            {items.map((item) => (
              <StyledTag key={item.id} value={item.name} onClickCancel={onClickDelete(item.id)} />
            ))}
          </ItemWrapper>
        </LoadingHandler>
      </Wrapper>
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
    paddingTop: '28px',
    paddingBottom: '20px',
  }),
);

const DragHandlerButton = styled.button({
  all: 'unset',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const DragHandlerSpan = styled.span(
  {
    width: '2.125rem',
    height: '4px',
    borderRadius: '10px',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.gray2,
  }),
);

const SuggestionText = styled.p({ marginBottom: '8px' }, ({ theme }) => ({
  ...theme.typographies.caption2,
  color: theme.colors.gray4,
}));

const ItemWrapper = styled.div({
  display: 'flex',
  flexShrink: 0,
  gap: '8px',
  marginBottom: '22px',
  flexWrap: 'nowrap',
  overflowX: 'scroll',
  overflowY: 'hidden',
});

const StyledTag = styled(Tag)({
  flex: '0 0 auto',
  height: '38px',
});

const useSectionVisible = () => {
  const animationControls = useAnimationControls();
  const [isVisible, setIsVisible, toggleVisible] = useToggle(true);
  const isDragRef = useRef<boolean>(false);

  const startAnimationDependsOnIsVisble = () => {
    if (isVisible) {
      animationControls.start(visibleMotion);
    } else {
      animationControls.start(hideMotion);
    }
  };

  const onDragStart = () => {
    isDragRef.current = true;
  };

  const onDragEnd: DragHandlers['onDragEnd'] = (_, info) => {
    const shouldVisible = info.velocity.y < -50 && info.offset.y < 0;

    setIsVisible(shouldVisible);
    startAnimationDependsOnIsVisble();

    setTimeout(() => {
      isDragRef.current = false;
    }, 0);
  };

  const onClickToggleButton = () => {
    if (isDragRef.current) return;
    toggleVisible();
  };

  useDidUpdate(() => {
    startAnimationDependsOnIsVisble();
  }, [isVisible]);

  return { onDragStart, onDragEnd, onClickToggleButton, animationControls };
};

const visibleMotion = {
  y: 0,
  transition: { duration: 0.5, ease: defaultEasing },
};

const hideMotion = {
  y: HIDE_BOTTOM_POS,
  transition: { duration: 0.5, ease: defaultEasing },
};

interface RecommendItem {
  id: number;
  name: string;
}

const useRecommendItem = () => {
  const { data, isLoading } = useGetRecommendItem();

  const [items, setItems] = useState<RecommendItem[]>([]);

  useEffect(() => {
    if (!data) return;
    setItems(data.items.map((item, index) => ({ id: index, name: item })));
  }, [data]);

  const onClickDelete = (itemId: RecommendItem['id']) => () => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return { items, isLoading, onClickDelete };
};
