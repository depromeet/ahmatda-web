import styled from '@emotion/styled';

import AppBar from '@/components/navigation/AppBar';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const Information = () => {
  return (
    <>
      <WhiteBackgroundGlobalStyles />

      <main>
        <AppBar title="정보" />
        <Ul>
          {INFORMATION.map(({ title, link }) => (
            <Li key={title}>
              <a href={link}>{title}</a>
            </Li>
          ))}
        </Ul>
      </main>
    </>
  );
};

export default Information;

const Ul = styled.ul`
  list-style: none;
  margin-top: 16px;
`;

const Li = styled.li(
  {
    paddingBlock: '16px',
  },
  ({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray2}`,
    color: theme.colors.gray5,
    ...theme.typographies.body1,
  }),
);

// TODO: 정보별 링크 추가
const INFORMATION = [
  { title: '이용약관', link: '' },
  { title: '개인정보 정책', link: '' },
  { title: '오픈소스', link: '' },
];
