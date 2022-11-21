import { ReactElement } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import IconHome from '../icon/IconHome';
import IconSearch from '../icon/IconSearch';

interface RouteMatch {
  route: string;
  matchElement: ReactElement;
  nonMatchElement: ReactElement;
}

const ROUTE_MATCH_ELEMENT: RouteMatch[] = [
  { route: '/', matchElement: <IconHome isAct />, nonMatchElement: <IconHome /> },
  { route: '/template', matchElement: <IconSearch isAct />, nonMatchElement: <IconSearch /> },
];

/**
 * 
 * @example
 * 
 * ```
 * HomePage.getLayout = function getLayout(page: ReactElement) {
    return (
      <>
        {page}
        <BottomNavigation />
      </>
    );
  };
  ```
 */
const BottomNavigation = () => {
  const router = useRouter();

  return (
    <>
      <Wrapper>
        {ROUTE_MATCH_ELEMENT.map(({ route, matchElement, nonMatchElement }) => (
          <Anchor href={route} key={route}>
            {router.asPath === route ? matchElement : nonMatchElement}
          </Anchor>
        ))}
      </Wrapper>
      <ScrollableDiv />
    </>
  );
};

export default BottomNavigation;

const HEIGHT = '56px';

const Wrapper = styled.section(
  {
    width: '100%',
    height: HEIGHT,
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.white, borderTop: `1px solid ${theme.colors.gray1}` }),
);

const Anchor = styled(NextLink)({
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ScrollableDiv = styled.div({ height: HEIGHT, appearance: 'none' });
