import styled from '@emotion/styled';

import AppBar from '@/components/navigation/AppBar';
import ToggleSwitch from '@/components/toggle/ToggleSwitch';
import { WhiteBackgroundGlobalStyles } from '@/styles/GlobalStyles';

const AlarmSetting = () => {
  // TODO: 유저의 알림 설정 상태를 변경하는 API 추가
  return (
    <>
      <WhiteBackgroundGlobalStyles />

      <main>
        <AppBar title="알림 설정" />
        <Title>푸시 알림</Title>
        <Ul>
          <Li>
            <span>전체 소지품 알림</span>
            <ToggleSwitch name="total" />
          </Li>
          <Li>
            <span>중요 소지품 알림</span>
            <ToggleSwitch name="important" />
          </Li>
          <Li>
            <span>미체크 소지품 알림</span>
            <ToggleSwitch name="unchecked" />
          </Li>
        </Ul>
      </main>
    </>
  );
};

export default AlarmSetting;

const Title = styled.p({ margin: '16px 0 8px 0' }, ({ theme }) => ({
  color: theme.colors.gray6,
  ...theme.typographies.caption1,
}));

const Ul = styled.ul`
  list-style: none;
  margin-top: 16px;
`;

const Li = styled.li(
  {
    paddingBlock: '16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray2}`,
    color: theme.colors.gray5,
    ...theme.typographies.body1,
  }),
);
