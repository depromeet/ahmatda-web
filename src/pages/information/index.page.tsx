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
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
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

const INFORMATION = [
  { title: '이용약관', link: 'https://ahmatda.notion.site/bc42621887b94bf2bce7f7c4f8c6700c' },
  { title: '개인정보 정책', link: 'https://ahmatda.notion.site/5855ebbc00394df182d254b1e8f3a3ea' },
  { title: '오픈소스', link: 'https://github.com/depromeet/ahmatda-web' },
];
