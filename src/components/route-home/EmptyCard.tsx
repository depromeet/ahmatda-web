import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import GraphicEmptyCard from '../graphic/GraphicEmptyCard';
import IconAdd from '../icon/IconAdd';

import useToggle from '@/hooks/common/useToggle';

const ListAppendBottomSheet = dynamic(() => import('./ListAppendBottomSheet'));

const EmptyCard = () => {
  const [isShowingListAppend, _, toggleIsShowingListAppend] = useToggle(false);

  return (
    <>
      <Wrapper>
        <GraphicWrapper>
          <GraphicEmptyCard />
        </GraphicWrapper>
        <ButtonWrapper>
          <LabelButton withIcon onClick={toggleIsShowingListAppend}>
            <IconAdd /> 추가하기
          </LabelButton>
        </ButtonWrapper>
      </Wrapper>

      <ListAppendBottomSheet isShowing={isShowingListAppend} setToClose={toggleIsShowingListAppend} />
    </>
  );
};

export default EmptyCard;

const Wrapper = styled.div({
  width: '100%',
  minHeight: '410px',
  height: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
});

const GraphicWrapper = styled.div({
  width: '100%',
  height: '100%',
  flexGrow: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonWrapper = styled.div(
  {
    width: '100%',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ theme }) => ({
    borderTop: `1px solid ${theme.colors.gray1}`,
  }),
);
