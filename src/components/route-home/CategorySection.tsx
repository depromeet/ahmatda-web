import styled from '@emotion/styled';

import IconButton from '../button/IconButton';
import Chip from '../chip/Chip';
import IconOverflow from '../icon/IconOverflow';

import CategorySettingBottomSheet from './CategorySettingBottomSheet';

import useToggle from '@/hooks/common/useToggle';

const CategorySection = () => {
  const [isCategorySettingShowing, setCategorySettingShowing, toggleCategorySettingShowing] = useToggle(false);

  return (
    <>
      <Section>
        <ChipWrapper>
          <Chip label="일상" color="black" />
          <Chip label="일상" />
          <Chip label="일상" />
          <Chip label="일상" />
        </ChipWrapper>

        <OverflowWrapper>
          <IconButton onClick={toggleCategorySettingShowing}>
            <IconOverflow />
          </IconButton>
        </OverflowWrapper>
      </Section>

      <CategorySettingBottomSheet
        isShowing={isCategorySettingShowing}
        setToClose={() => setCategorySettingShowing(false)}
      />
    </>
  );
};

export default CategorySection;

const Section = styled.section({
  width: '100%',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
});

const ChipWrapper = styled.div({
  position: 'relative',
  width: `calc(100% - 40px)`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  overflowX: 'auto',

  '& > *': {
    flexShrink: '0',
  },
});

const OverflowWrapper = styled.div({ position: 'relative' }, ({ theme }) => ({
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '0',
    right: '100%',
    width: '24px',
    height: '100%',
    background: `linear-gradient(to right, rgba(0, 0, 0, 0), ${theme.colors.gray1} 90%)`,
  },
}));
