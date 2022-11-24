import styled from '@emotion/styled';
import { m } from 'framer-motion';

import { defaultFadeInVariants, staggerOne } from '@/constants/motions';

interface OnboardTitleProps {
  title: string;
  subTitle: string;
}

const TitleSection = ({ title, subTitle }: OnboardTitleProps) => {
  return (
    <m.div variants={staggerOne} initial="initial" animate="animate" exit="exit">
      <MainTitle dangerouslySetInnerHTML={{ __html: title }} variants={defaultFadeInVariants} />
      <SubTitle variants={defaultFadeInVariants}>{subTitle}</SubTitle>
    </m.div>
  );
};

export default TitleSection;

const MainTitle = styled(m.h1)`
  ${({ theme }) => ({ ...theme.typographies.text1 })};
  color: ${({ theme }) => theme.colors.gray6};
`;
const SubTitle = styled(m.h2)`
  ${({ theme }) => ({ ...theme.typographies.caption1 })};
  color: ${({ theme }) => theme.colors.gray4};
`;
