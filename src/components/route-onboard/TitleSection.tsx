import styled from '@emotion/styled';
import { m } from 'framer-motion';

import { defaultFadeInVariants, staggerOne } from '@/constants/motions';

interface OnboardTitleProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
}

const TitleSection = ({ title, subTitle }: OnboardTitleProps) => {
  return (
    <m.div variants={staggerOne} initial="initial" animate="animate" exit="exit">
      <MainTitle variants={defaultFadeInVariants}>{title}</MainTitle>
      <SubTitle variants={defaultFadeInVariants}>{subTitle}</SubTitle>
    </m.div>
  );
};

export default TitleSection;

const MainTitle = styled(m.p)`
  ${({ theme }) => ({ ...theme.typographies.text1 })};
  color: ${({ theme }) => theme.colors.gray6};
  padding-bottom: 16px;
`;
const SubTitle = styled(m.p)`
  ${({ theme }) => ({ ...theme.typographies.caption1 })};
  color: ${({ theme }) => theme.colors.gray4};
`;
