import styled from '@emotion/styled';

// Solutions Section
export const SolutionsSection = styled.section`
  padding: 100px 0;
  background: #0b161e;
`;

export const SolutionsContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SolutionsHeader = styled.div`
  text-align: center;
  // margin-bottom: 80px;

  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 16px 0;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 18px;
    color: #b0d4dc;
    margin: 0;
    line-height: 1.6;
  }
`;

export const SolutionsTitle = styled.div`
  font-size: 40px;
  color: #ffffff;
  padding-bottom: 15px;
`;

export const SolutionsTitleBrand = styled.span`
  font-size: 54px;
  font-weight: bold;
  color: #d4ad32;
`;

export const SolutionsTitleProduct = styled.span`
  color: #32b8c6;
  font-weight: 700;
  background: rgba(50, 184, 198, 0.12);
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
`;

export const SolutionsLead = styled.div`
  font-size: 18px;
  color: #b0d4dc;
  margin-bottom: 10px;
  line-height: 1.6;
`;

export const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  margin: 50px auto;
`;

export const SolutionItem = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  background: rgba(50, 184, 198, 0.03);
  border: 1px solid rgba(50, 184, 198, 0.1);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  gap: 16px;

  opacity: 0;
  transform: translateY(40px);

  &[data-visible='true'] {
    animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  &:nth-of-type(1)[data-visible='true'] {
    animation-delay: 0s;
  }

  &:nth-of-type(2)[data-visible='true'] {
    animation-delay: 0.2s;
  }

  &:nth-of-type(3)[data-visible='true'] {
    animation-delay: 0.4s;
  }

  &:hover {
    background: rgba(50, 184, 198, 0.08);
    border-color: rgba(50, 184, 198, 0.2);
    transform: translateY(-8px);
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SolutionImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  margin-bottom: 24px;
`;

export const SolutionImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 5px solid #ffffff;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const SolutionContent = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

export const SolutionBadge = styled.div<{ reverse?: boolean }>`
  color: #b0d4dc;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const SolutionTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px 0;
  line-height: 1.3;
`;

// Center CTA Button
export const SolutionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SolutionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #ffffff;
  color: #0b161e;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 40px;
  border-radius: 8px;
  border: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(30, 60, 143, 0.3);

  &:hover {
    opacity: 0.8;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;
