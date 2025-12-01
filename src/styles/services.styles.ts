import styled from '@emotion/styled';

export const ServiceSection = styled.section`
  padding: 80px 8% 100px;
  background: #0b161e;
`;

export const ServiceNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 42px;
  margin: 40px 0 60px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -14px;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(168, 197, 204, 0.15);
  }
`;

export const ServiceNavButton = styled.button`
  background: transparent;
  border: none;
  color: #a8c5cc;
  font-size: 1.05rem;
  padding: 12px 4px;
  cursor: pointer;
  position: relative;
  transition: color 0.25s ease;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -14px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #a8c5cc;
    transition: 0.28s ease;
    transform: translateX(-50%);
  }

  &:hover::after,
  &.active::after {
    width: 30px;
  }
`;

export const ServiceOutput = styled.div`
  min-height: 300px;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.35s,
    transform 0.35s;
`;

export const OrgSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0 40px;
`;

export const OrgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const OrgCard = styled.div`
  width: 240px;
  background: #162c3f;
  border-radius: 14px;
  border: 1px solid rgba(168, 197, 204, 0.18);
  padding: 28px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(168, 197, 204, 0.35);
  }
`;

export const OrgPhoto = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #000;
  background-size: cover;
  background-position: center;
  margin-bottom: 18px;
  border: 2px solid rgba(255, 255, 255, 0.15);
`;

export const OrgRole = styled.div`
  font-size: 0.95rem;
  opacity: 0.75;
  margin-bottom: 6px;
  color: #a8c5cc;
`;

export const OrgName = styled.div`
  font-size: 1.35rem;
  color: #fff;
  font-weight: 600;
`;

export const OrgLine = styled.div`
  width: 60px;
  height: 2px;
  background: rgba(168, 197, 204, 0.35);
  border-radius: 2px;
`;

export const OrgDetailOutput = styled.div`
  margin-top: 50px;
`;

export const DetailBox = styled.div`
  background: #162c3f;
  border: 1px solid rgba(168, 197, 204, 0.18);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`;

export const DetailImage = styled.div`
  flex: 1;
  min-width: 240px;
  background: #0b161e;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 380px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DetailText = styled.div`
  flex: 2;
  min-width: 260px;
  color: #a8c5cc;

  h3 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1.3rem;
  }

  p {
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 20px;
    white-space: pre-line;
  }

  div {
    margin-bottom: 16px;

    strong {
      color: #fff;
      display: block;
      margin-bottom: 6px;
    }

    span {
      opacity: 0.75;
      display: block;
      line-height: 1.6;
    }
  }
`;

export const SnsSection = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 0 40px;
  text-align: center;
`;

export const SnsTitle = styled.h3`
  color: #fff;
  font-size: 1.9rem;
  margin-bottom: 10px;
`;

export const SnsDesc = styled.p`
  color: #a8c5cc;
  opacity: 0.75;
  margin-bottom: 40px;
  line-height: 1.6;
`;

export const SnsFlex = styled.div`
  display: flex;
  gap: 26px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    gap: 16px;
  }
`;

export const SnsCardLink = styled.a`
  width: 300px;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: 0.35s ease;
  display: flex;
  align-items: flex-end;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px) scale(1.03);
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 350px;
  }
`;

export const SnsOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.1));
  transition: 0.3s;

  ${SnsCardLink}:hover & {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.25));
  }
`;

export const SnsInfo = styled.div`
  position: relative;
  padding: 18px;
  text-align: left;
  z-index: 3;
`;

export const SnsName = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
`;

export const SnsSub = styled.div`
  font-size: 0.9rem;
  opacity: 0.85;
  color: #d2e4ea;
`;

export const PricingWrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const PricingTitle = styled.h3`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 10px;
`;

export const PricingSubtitle = styled.p`
  color: #a8c5cc;
  opacity: 0.75;
  margin-bottom: 40px;
`;

export const PricingGrid = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PricingCard = styled.div`
  background: #1a242f;
  width: 250px;
  padding: 32px 0 40px;
  border-radius: 16px;
  border: 1px solid rgba(168, 197, 204, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.25s;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(168, 197, 204, 0.4);
  }
`;

export const PricingCardTitle = styled.h3`
  color: #fff;
  margin-bottom: 6px;
`;

export const PricingPeriod = styled.p`
  color: #a8c5cc;
  opacity: 0.8;
  margin-bottom: 20px;
`;

export const PricingOld = styled.p`
  color: #a8c5cc;
  text-decoration: line-through;
  opacity: 0.55;
  margin-bottom: 4px;
`;

export const PricingSale = styled.p`
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const PricingPrice = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
`;

export const PricingVat = styled.p`
  color: #a8c5cc;
  opacity: 0.6;
  margin-bottom: 26px;
`;

export const PricingBtn = styled.button`
  background: #4456ff;
  color: white;
  padding: 10px 26px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.25s ease;

  &:hover {
    background: #5a6dff;
  }
`;
