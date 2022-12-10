import dynamic from 'next/dynamic';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import useToggle from '@/hooks/common/useToggle';

const CardItemSettingBottomSheet = dynamic(() => import('./CardItemSettingBottomSheet'));

// TODO: interface 선언 위치 변경 후 대응
interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  id: string;
  isChecked: boolean;
  name: string;
  isImportant: boolean;
}

const CardItem = ({ isChecked, isImportant, name }: Props) => {
  const [isCardItemSettingShowing, _, toggleIsCardItemSettingShowing] = useToggle(false);

  return (
    <>
      <Wrapper isChecked={isChecked} isImportant={isImportant}>
        {/* TODO: checkbox 디자인 확정시 적용 */}
        <input type="checkbox" defaultChecked={isChecked} />

        <NameButton
          type="button"
          onClick={toggleIsCardItemSettingShowing}
          isChecked={isChecked}
          isImportant={isImportant}
        >
          {name}
        </NameButton>
      </Wrapper>

      <CardItemSettingBottomSheet setToClose={toggleIsCardItemSettingShowing} isShowing={isCardItemSettingShowing} />
    </>
  );
};

export default CardItem;

const Wrapper = styled.div<{ isImportant: boolean; isChecked: boolean }>(
  {
    display: 'flex',
    gap: '8px',
    width: 'fit-content',
    maxWidth: '100%',
    paddingTop: '7px',
    paddingBottom: '7px',
    paddingLeft: '8px',
    paddingRight: '10px',
    borderRadius: '8px',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.gray1 }),
  ({ isImportant, theme }) => isImportant && importantWrapperCss(theme),
  ({ isImportant, isChecked }) => isImportant && isChecked && checkedWhenImportantWrapperCss,
);

const importantWrapperCss = (theme: Theme) => css({ backgroundColor: theme.colors.secondary });

const checkedWhenImportantWrapperCss = css({
  backgroundColor: '#FFD3C5',
});

const NameButton = styled.button<{ isImportant: boolean; isChecked: boolean }>(
  {
    all: 'unset',
    cursor: 'pointer',
    display: 'inline-block',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  ({ theme }) => ({
    ...theme.typographies.button2,
  }),
  ({ isChecked, theme }) => isChecked && checkedButtonCss(theme),
  ({ isImportant, isChecked }) => isImportant && isChecked && checkedWhenImportantButtonCss,
);

const checkedButtonCss = (theme: Theme) => css({ color: theme.colors.gray3 });

const checkedWhenImportantButtonCss = css({ color: '#C7A79C' });
