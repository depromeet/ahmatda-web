import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  icon: ReactNode;
  title: string;
  // TODO: API 스펙에 따라 이름 변경 > 시간 계산 해당 컴포넌트에서 진행
  time: string;
}

const NoticeItem: FC<Props> = ({ icon, title, time }) => {
  return (
    <Article>
      {icon}
      <TextWrapper>
        <Heading>{title}</Heading>
        <Span>{time}</Span>
      </TextWrapper>
    </Article>
  );
};

export default NoticeItem;

const Article = styled.article({ padding: '20px 0', display: 'flex', gap: '8px' }, ({ theme }) => ({
  ...theme.typographies.body1,
}));

const TextWrapper = styled.div({ display: 'flex', flexDirection: 'column', gap: '8px' });

const Heading = styled.h3(({ theme }) => ({ ...theme.typographies.body1 }));

const Span = styled.span(({ theme }) => ({ ...theme.typographies.caption2, color: theme.colors.gray4 }));
