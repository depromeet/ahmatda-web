import React from 'react';
import styled from '@emotion/styled';

import LabelButton from '../button/LabelButton';
import IconAdd from '../icon/IconAdd';
import IconCancel from '../icon/IconCancel';

import CategorySection from './CategorySection';

interface Props {
  onComplete?: VoidFunction;
}

const AddTemplateSection = ({ onComplete }: Props) => {
  return (
    <>
      <Header>
        <IconCancel />
        <Title>추가하기</Title>
        <LabelButton size="large" onClick={onComplete}>
          완료
        </LabelButton>
      </Header>
      <CategorySection defaultColor="gray" />
      <List>
        <ListItem>기존 리스트 1</ListItem>
        <ListItem>기존 리스트 2</ListItem>
        <ListItem new selected>
          <IconAdd />
          디프만 UT 준비물로 리스트 추가
        </ListItem>
      </List>
    </>
  );
};

export default AddTemplateSection;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Title = styled.span`
  ${({ theme }) => theme.typographies.subTitle}
`;

const List = styled.ul`
  list-style: none;
  margin-top: 24px;
`;

interface ListItemProps {
  new?: boolean;
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
  (props) => props.new && { color: props.theme.colors.gray3, borderBottom: 'none' },
  (props) =>
    props.selected && {
      backgroundColor: props.theme.colors.gray1,
      boxShadow: '0px 4px 4px 0px #00000040',
    },
);
