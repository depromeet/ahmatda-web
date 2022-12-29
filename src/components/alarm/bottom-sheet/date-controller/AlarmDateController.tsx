import styled from '@emotion/styled';

import ConfigPicker from './ConfigPicker';
import Header from './Header';

const AlarmDateController = () => {
  return (
    <>
      <Header />
      <Divider />
      <ConfigPicker />
    </>
  );
};

export default AlarmDateController;

const Divider = styled.hr(
  {
    border: 'none',
    height: '1px',
    width: '100%',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.gray2,
  }),
);
