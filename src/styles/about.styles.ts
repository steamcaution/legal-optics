import styled from '@emotion/styled';

// Problem Section
export const ProblemSection = styled.section`
  padding: 100px 0;
  background: #0b161e;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px 0;
  text-align: center;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SectionLead = styled.p`
  font-size: 18px;
  color: #b0d4dc;
  text-align: center;
  margin: 0 0 60px 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 40px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 0 30px 0;
  }
`;

export const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 60px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const ProblemCard = styled.div`
  background: #162c3f;
  padding: 40px 32px;
  border-radius: 12px;
  border: 1px solid rgba(94, 82, 64, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const ProblemIcon = styled.div`
  font-size: 56px;
  margin-bottom: 20px;
`;

export const ProblemCardTitle = styled.h3`
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
  margin: 16px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 14px;
    color: #a8c5cc;
    line-height: 1.8;
    padding: 8px 0;
    padding-left: 24px;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #32b8c6;
      font-weight: bold;
    }
  }
`;

// Solutions Section
export const SolutionsSection = styled.section`
  padding: 100px 0;
  background: #0b161e;
`;

export const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 60px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const SolutionCard = styled.div`
  background: #162c3f;
  padding: 40px 32px;
  border-radius: 12px;
  border: 1px solid rgba(94, 82, 64, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 18px;
    color: #ffffff;
    font-weight: 700;
    margin: 16px 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
    color: #a8c5cc;
    line-height: 1.6;
    margin: 12px 0;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const SolutionBadge = styled.div`
  display: inline-block;
  background: #32b8c6;
  color: #0b161e;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0;

  li {
    font-size: 14px;
    color: #a8c5cc;
    line-height: 1.8;
    padding: 8px 0;
    padding-left: 24px;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #32b8c6;
      font-weight: bold;
    }
  }
`;

export const SolutionLink = styled.a`
  display: inline-block;
  color: #32b8c6;
  text-decoration: none;
  font-weight: 600;
  margin-top: 16px;
  font-size: 14px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: #4dd9e8;
    transform: translateX(5px);
  }
`;

// Process Section
export const ProcessSection = styled.section`
  padding: 100px 0;
  background: #0b161e;
`;

export const SimpleProcessFlow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 20px;
  margin-top: 60px;
  align-items: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const SimpleProcessStep = styled.div`
  text-align: center;
  padding: 40px 32px;
  background: #162c3f;
  border-radius: 12px;
  border: 1px solid rgba(94, 82, 64, 0.2);
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  h4 {
    font-size: 18px;
    color: #ffffff;
    margin: 12px 0;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
    color: #a8c5cc;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 900px) {
    padding: 30px 20px;
  }
`;

export const SimpleStepNumber = styled.div`
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #32b8c6 0%, #32b8c6 100%);
  color: #0b161e;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0 0 0 3px rgba(50, 184, 198, 0.4);
`;

export const SimpleStepIcon = styled.div`
  font-size: 56px;
  margin: 20px 0;
`;

export const SimpleProcessArrow = styled.div`
  font-size: 36px;
  color: #32b8c6;
  font-weight: bold;
  text-align: center;

  @media (max-width: 900px) {
    transform: rotate(90deg);
    margin: 10px 0;
  }
`;

// Technology Section
export const TechnologySection = styled.section`
  padding: 100px 0;
  background: #0b161e;
`;

export const TechContent = styled.div`
  margin-top: 60px;
`;

export const TechProblemSolution = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TechBox = styled.div`
  padding: 40px 32px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 20px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 14px;
      color: #a8c5cc;
      line-height: 1.8;
      padding: 8px 0;
      padding-left: 24px;
      position: relative;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: #32b8c6;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const ProblemBox = styled(TechBox)`
  background: rgba(192, 21, 47, 0.08);
  border-left: 4px solid #c0152f;
`;

export const SolutionBox = styled(TechBox)`
  background: rgba(50, 184, 198, 0.08);
  border-left: 4px solid #32b8c6;
`;

export const CompetitiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const CompetitiveCard = styled.div`
  background: #162c3f;
  padding: 32px 24px;
  border-radius: 12px;
  border: 1px solid rgba(94, 82, 64, 0.2);
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  h4 {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    margin: 12px 0;
  }

  p {
    font-size: 13px;
    color: #a8c5cc;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const CompIcon = styled.div`
  font-size: 40px;
  margin-bottom: 12px;
`;

// Stats Section
export const StatsSection = styled.section`
  padding: 100px 0;
  background: rgba(94, 82, 64, 0.12);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 60px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: #162c3f;
  padding: 40px 32px;
  border-radius: 12px;
  border: 1px solid rgba(94, 82, 64, 0.2);
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  border-top: 4px solid #32b8c6;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const StatNumber = styled.div`
  font-size: 52px;
  font-weight: bold;
  color: #32b8c6;
  margin: 0 0 12px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const StatLabel = styled.div`
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StatDesc = styled.p`
  font-size: 14px;
  color: #a8c5cc;
  margin: 0;
`;

// CTA Section
export const CTASection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #0b161e 0%, #162c3f 100%);
`;

export const CTAWrap = styled.div`
  padding-bottom: 50px;
  text-align: center;
  color: #f8f8f8;

  h2 {
    font-size: 42px;
    margin: 0 0 20px 0;
    font-weight: bold;
    color: #f8f8f8;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  > p {
    font-size: 18px;
    margin: 0 0 50px 0;
    color: #b0d4dc;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 16px;
      margin: 0 0 30px 0;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      margin: 0 0 20px 0;
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BtnLarge = styled.a`
  padding: 20px 45px;
  font-size: 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 32px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;

export const BtnPhone = styled(BtnLarge)`
  background: #ffffff;
  color: #0b161e;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const BtnKakao = styled(BtnLarge)`
  background: #fee500;
  color: #000000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #fddc3f;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CTAEmail = styled.div`
  margin-top: 32px;

  a {
    color: #b0d4dc;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    border-bottom: 1px solid #b0d4dc;
    padding-bottom: 4px;

    &:hover {
      color: #ffffff;
      border-bottom-color: #ffffff;
    }
  }
`;

// Final Message Section
export const FinalMessageSection = styled.section`
  padding: 80px 0;
  background: #0b161e;
`;

export const FinalMessage = styled.div`
  text-align: center;

  h2 {
    font-size: 42px;
    line-height: 1.5;
    margin: 0 0 20px 0;
    font-weight: bold;
    color: #f8f8f8;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .highlight {
    font-size: 20px;
    color: #32b8c6;
    font-weight: 600;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
