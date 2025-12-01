import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
  margin-top: 0;
`;

export const FooterTop = styled.div`
  background: #142530;
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/legal-optics/img/background_logo.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 20%;
    pointer-events: none;
  }
`;

export const FooterTopInner = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;

  h2 {
    font-size: 35px;
    line-height: 1.9;
    font-weight: 400;
    color: #f7fbfd;
    margin: 0 0 18px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 22px;
      line-height: 1.5;
      letter-spacing: 0;
    }
  }

  hr {
    width: 65%;
    height: 2px;
    background: rgba(255, 255, 255, 0.14);
    border: none;
    margin: 26px auto;

    @media (max-width: 768px) {
      width: 80%;
      margin: 20px auto;
    }

    @media (max-width: 480px) {
      width: 90%;
      margin: 16px auto;
    }
  }

  @media (max-width: 768px) {
    padding: 70px 24px 50px;
  }

  @media (max-width: 480px) {
    padding: 50px 16px 40px;
  }
`;

export const FooterBottom = styled.div`
  background: #0e293c;
  color: #cfe6ea;
  padding: 32px 0;
`;

export const InfoWrap = styled.div``;
export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  .footerLogo {
    width: 150px;
  }
`;
export const InfoInner = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 24px;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: 480px) {
    gap: 24px;
    padding: 0 16px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    margin: 0;
    font-size: 13px;
    color: #99a8b0;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .company-name {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 4px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: #99a8b0;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    strong {
      color: #b0d4dc;
      font-weight: 600;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  width: 32px;
  height: 32px;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const FooterBottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  color: #6b7a81;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    font-size: 12px;
    color: #6b7a81;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      color: #99a8b0;
    }

    @media (max-width: 768px) {
      font-size: 11px;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.08);
    font-size: 12px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

/* Legacy exports for compatibility */
export const InfoCol = styled.div`
  display: none;
`;

export const InfoColManager = styled.div`
  display: none;
`;

export const LogoCol = styled.div`
  display: none;
`;

export const ManagerPhone = styled.p`
  display: none;
`;

export const CTAWrap = styled.div`
  display: none;
`;

export const CTAButtons = styled.div`
  display: none;
`;

export const CTAButtonIcon = styled.a`
  display: none;
`;

export const FooterBottomSection = styled.div`
  display: none;
`;
