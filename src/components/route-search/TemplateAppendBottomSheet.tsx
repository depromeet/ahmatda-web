import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import AppBar from '../navigation/AppBar';
import BottomSheet from '../portal/BottomSheet';

import CategorySection from './CategorySection';

type Props = Omit<ComponentProps<typeof BottomSheet>, 'children'>;

const TemplateAppendBottomSheet = ({ isShowing, setToClose }: Props) => {
  return (
    <BottomSheet isShowing={isShowing} setToClose={setToClose}>
      <AppBar
        backButtonType="cancel"
        title="추가하기"
        rightElement={<LabelButton size="large">완료</LabelButton>}
        onClickBackButton={setToClose}
      />
      <div style={{ marginTop: 8 }}>
        <CategorySection defaultColor="gray" />
      </div>
      <List>
        <ListItem>기존 리스트 1</ListItem>
        <ListItem>기존 리스트 2</ListItem>
        <ListItem newItem selected>
          <IconAdd />
          디프만 UT 준비물로 리스트 추가
        </ListItem>
      </List>
    </BottomSheet>
  );
};

export default TemplateAppendBottomSheet;

const List = styled.ul`
  list-style: none;
  margin-top: 24px;
`;

interface ListItemProps {
  newItem?: boolean;
  selected?: boolean;
}

const ListItem = styled('li')<ListItemProps>(
  {
    display: 'flex',
    width: 'calc(100% + 20px * 2)',
    alignItems: 'center',
    height: 48,
    marginLeft: -20,
    paddingLeft: 20,
  },
  ({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray1}`,
    color: `${theme.colors.gray6}`,
  }),
  (props) => props.newItem && { color: props.theme.colors.gray3, borderBottom: 'none' },
  (props) =>
    props.selected && {
      backgroundColor: props.theme.colors.gray1,
      boxShadow: '0px 4px 4px 0px #00000040',
    },
);
