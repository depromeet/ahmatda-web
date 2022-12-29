/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

import ScrollBox from './ScrollBox';

interface Props {
  onChange?: (value: number) => void;
}
interface DateTimeState {
  date: string;
  hour: number;
  minute: number;
  ampm: 'AM' | 'PM';
}

const DateTimePicker: FC<Props> = ({ onChange }) => {
  const [dateTime, setDateTime] = useState<DateTimeState>({
    date: dayjs().format('YYYY-MM-DD'),
    hour: 0,
    minute: 0,
    ampm: 'AM',
  });

  useEffect(() => {
    const { date, hour, minute, ampm } = dateTime;
    const formattedDate = dayjs(`${date} ${hour}:${minute} ${ampm}`).format('YYYY-MM-DD HH:mm');
    const timestamp = dayjs(formattedDate).valueOf();
    onChange?.(timestamp);
  }, [dateTime]);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const transformDates = months
    .flatMap((month) =>
      days.map((day) => {
        const year = new Date().getFullYear();
        return dayjs(`${year}-${month}-${day}`).format('YYYY-MM-DD');
      }),
    )
    .map((date) => {
      const weekday = dayjs(date).weekday();
      const dateText = dayjs(date).format('M월 D일');
      return `${dateText} (${['일', '월', '화', '수', '목', '금', '토'][weekday]})`;
    });
  const dates = [...new Set(transformDates)];

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => `0${i}`.slice(-2));
  const ampm = ['오전', '오후'];

  const changeTime = (key: keyof typeof dateTime) => (value: number | string) => {
    if (key === 'date' && typeof value === 'string') {
      const year = new Date().getFullYear();
      const [month, day] = value.split(' ').map((item) => item.slice(0, -1));
      const formattedDate = dayjs(`${year}-${month}-${day}`).format('YYYY-MM-DD');
      setDateTime((prev) => ({ ...prev, date: formattedDate }));
      return;
    }
    if (key === 'hour') {
      setDateTime((prev) => ({ ...prev, hour: Number(value) }));
      return;
    }

    if (key === 'minute') {
      setDateTime((prev) => ({ ...prev, minute: Number(value) }));
      return;
    }
    if (key === 'ampm') {
      setDateTime((prev) => ({ ...prev, ampm: value === '오전' ? 'AM' : 'PM' }));
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Container>
        <ScrollBox items={dates} onChange={changeTime('date')} width={135} align="right" />
        <ScrollBox items={ampm} onChange={changeTime('ampm')} width={60} align="right" />
        <ScrollBox items={hours} onChange={changeTime('hour')} width={40} align="right" />
        <Colon />
        <ScrollBox items={minutes} onChange={changeTime('minute')} width={40} align="left" />
        <PickedBackground />
      </Container>
    </div>
  );
};

export default DateTimePicker;

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
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

const Colon = styled.div(
  {
    padding: '0 15px',
    '&::before': {
      content: '":"',
    },
  },
  ({ theme }) => ({
    ...theme.typographies.button1,
    color: theme.colors.white,
  }),
);
