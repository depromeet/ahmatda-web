import styled from '@emotion/styled';

import Checkbox from '@/components/checkbox/Checkbox';

type Option = {
  id: string;
  name: string;
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  options: Option[];
  onToggle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ListCard = ({ title, options, ...rest }: Props) => {
  return (
    <Wrapper>
      <StyledHeader>
        <Title>{title}</Title>
        <Checkbox {...rest} />
      </StyledHeader>
      <Counter>{options.length}개</Counter>
      <ItemList>
        {options.map(({ id, name }) => (
          <ItemText key={id}>{name}</ItemText>
        ))}
      </ItemList>
    </Wrapper>
  );
};

export default ListCard;

const Wrapper = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 20px 20px 16px 20px;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Counter = styled.div`
  display: block;
  ${({ theme }) => ({ ...theme.typographies.caption2 })};
  color: #7a7a7a;
`;

const Title = styled.span`
  ${({ theme }) => ({ ...theme.typographies.title2 })}
  color: ${({ theme }) => theme.colors.black};
`;

const ItemList = styled.div`
  margin-block: 16px;
  display: flex;
  flex-direction: column;
  height: 216px;
  overflow: auto;
`;

const ItemText = styled.p`
  height: 40px;
  ${({ theme }) => ({ ...theme.typographies.body1 })};
  padding: 10px 4px;
`;
