import { useId } from 'react';
import dynamic from 'next/dynamic';
import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import IconCardItemCheck from './IconCardItemCheck';

import { UserItem } from '@/hooks/api/template/type';
import useToggle from '@/hooks/common/useToggle';

const CardItemSettingBottomSheet = dynamic(() => import('./CardItemSettingBottomSheet'));

interface Props {
  itemId: UserItem['id'];
  name: UserItem['name'];
  take: UserItem['take'];
  important: UserItem['important'];
}

const CardItem = ({ name, take, important, itemId }: Props) => {
  const id = useId();
  // TODO: API 대응
  const [isCurrentChecked, _, toggleCurrentChecked] = useToggle(take);

  const [isCardItemSettingShowing, __, toggleIsCardItemSettingShowing] = useToggle(false);

  return (
    <>
      <Wrapper isChecked={isCurrentChecked} isImportant={important}>
        <HidedInput id={id} type="checkbox" checked={isCurrentChecked} onChange={toggleCurrentChecked} />
        <IconLabel htmlFor={id}>
          <IconCardItemCheck isChecked={isCurrentChecked} isImportant={important} />
        </IconLabel>

        <NameButton
          type="button"
          onClick={toggleIsCardItemSettingShowing}
          isChecked={isCurrentChecked}
          isImportant={important}
        >
          {name}
        </NameButton>
      </Wrapper>

      <CardItemSettingBottomSheet
        itemId={itemId}
        name={name}
        important={important}
        setToClose={toggleIsCardItemSettingShowing}
        isShowing={isCardItemSettingShowing}
      />
    </>
  );
};

export default CardItem;

const Wrapper = styled.div<{ isImportant: boolean; isChecked: boolean }>(
  {
    position: 'relative',
    display: 'flex',
    gap: '8px',
    width: 'fit-content',
    maxWidth: '100%',
    paddingTop: '7px',
    paddingBottom: '7px',
    paddingLeft: '8px',
    paddingRight: '10px',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.gray1 }),
  ({ isImportant, theme }) => isImportant && importantWrapperCss(theme),
  ({ isImportant, isChecked }) => isImportant && isChecked && checkedWhenImportantWrapperCss,
);

const importantWrapperCss = (theme: Theme) => css({ backgroundColor: theme.colors.secondary });

const checkedWhenImportantWrapperCss = css({
  backgroundColor: '#FFD3C5',
});

const HidedInput = styled.input({
  position: 'absolute',
  clipPath: 'polygon(0 0, 0 0, 0 0)',
});

const IconLabel = styled.label({
  cursor: 'pointer',
  width: '24px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
    transition: 'color 0.3s',
  },
  ({ theme }) => ({
    ...theme.typographies.button2,
  }),
  ({ isChecked, theme }) => isChecked && checkedButtonCss(theme),
  ({ isImportant, isChecked }) => isImportant && isChecked && checkedWhenImportantButtonCss,
);

const checkedButtonCss = (theme: Theme) => css({ color: theme.colors.gray3 });

const checkedWhenImportantButtonCss = css({ color: '#C7A79C' });
