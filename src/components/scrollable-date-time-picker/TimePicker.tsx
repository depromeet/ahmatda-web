/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import styled from '@emotion/styled';

import ScrollBox from './ScrollBox';

const TimePicker = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    ampm: '',
  });

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i + 1);
  const ampm = ['오전', '오후'];

  const changeTime = (key: 'hour' | 'minute' | 'ampm') => (value: number | string) => {
    setTime((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ width: '100%' }}>
      <div>{JSON.stringify(time)}</div>
      <Container>
        <ScrollBox items={ampm} onChange={changeTime('ampm')} align="right" />
        <ScrollBox items={hours} onChange={changeTime('hour')} />
        <ScrollBox items={minutes} onChange={changeTime('minute')} align="left" />
        <PickedBackground />
      </Container>
    </div>
  );
};

export default TimePicker;

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  position: 'relative',
});

const PickedBackground = styled.div(
  {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 38,
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: 8,
    zIndex: -1,
  },
  ({ theme }) => ({
    background: theme.colors.gray4,
  }),
);
