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
`;

export const SectionLead = styled.p`
  font-size: 18px;
  color: #b0d4dc;
  text-align: center;
  margin: 0 0 60px 0;
  line-height: 1.5;
`;

export const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 60px;
  padding: 0 30px;
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
`;

export const ProblemIcon = styled.div`
  margin-bottom: 40px;
  text-align: center;

  img {
    width: 130px;
    filter: drop-shadow(0 0 10px rgba(0, 128, 255, 0.8)) drop-shadow(0 0 20px rgba(0, 128, 255, 0.6));
    transition: all 0.3s ease;
  }
`;

export const ProblemCardTitle = styled.h3`
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
  margin: 16px 0;
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
  }

  p {
    font-size: 14px;
    color: #a8c5cc;
    line-height: 1.6;
    margin: 12px 0;
    word-break: keep-all;
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
  }

  p {
    font-size: 14px;
    color: #a8c5cc;
    line-height: 1.6;
    margin: 0;
    word-break: keep-all;
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
  margin: 20px 0;

  img {
    width: 70px;
    filter: drop-shadow(0 0 10px rgba(0, 128, 255, 0.8)) drop-shadow(0 0 20px rgba(0, 128, 255, 0.6));
    transition: all 0.3s ease;
  }
`;

export const SimpleProcessArrow = styled.div`
  font-size: 36px;
  color: #32b8c6;
  font-weight: bold;
  text-align: center;
`;

// Technology Section
export const TechnologySection = styled.section`
  padding: 100px 30px;
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
`;

export const CompetitiveCard = styled.div`
  background: #162c3f;
  padding: 32px 24px;
  border-radius: 12px;
  border: 1px solid rgba(94, 82, 64, 0.2);
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  word-break: keep-all;

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
`;

export const CompIcon = styled.div`
  font-size: 70px;
  margin-bottom: 30px;

  img {
    width: 70px;
    filter: drop-shadow(0 0 10px rgba(0, 128, 255, 0.7)) drop-shadow(0 0 20px rgba(0, 128, 255, 0.5));
    transition: all 0.3s ease;
  }
`;
