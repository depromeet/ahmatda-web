import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import IconButton from '@/components/button/IconButton';
import Chip from '@/components/chip/Chip';
import Graphic from '@/components/graphic/Graphic';
import IconOverflow from '@/components/icon/IconOverflow';
import { Category } from '@/hooks/api/category/type';
import useGetUserCategories from '@/hooks/api/category/useGetUserCategories';
import useToggle from '@/hooks/common/useToggle';
import recordEvent from '@/lib/analytics/record';
import currentCategoryState from '@/store/route-home/currentCategory';

const CategorySettingBottomSheet = dynamic(() => import('./CategorySettingBottomSheet'));

const CategorySection = () => {
  const [isCategorySettingShowing, setCategorySettingShowing, toggleCategorySettingShowing] = useToggle(false);
  const { data, currentCategory, onClickCategory } = useCategories();

  return (
    <>
      <Section>
        <ChipWrapper>
          {data?.map((eachCategory) => {
            const isCurrentCategory = eachCategory.id === currentCategory?.id;

            return (
              <Chip
                key={eachCategory.id}
                label={eachCategory.name}
                color={isCurrentCategory ? 'black' : 'default'}
                onClick={onClickCategory(eachCategory)}
                icon={<Graphic type={eachCategory.emoji} isAct={isCurrentCategory} />}
              />
            );
          })}
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

const useCategories = () => {
  const query = useGetUserCategories();
  const [currentCategory, setCurrentCategory] = useRecoilState(currentCategoryState);

  useEffect(() => {
    if (!query.data) return;
    if (currentCategory !== null) return;

    setCurrentCategory(query.data[0]);
  }, [query.data]);

  const onClickCategory = (category: Category) => () => {
    setCurrentCategory(category);
    recordEvent({ action: '사용자 카테고리 변경', value: category.name });
  };

  return { ...query, currentCategory, onClickCategory };
};
