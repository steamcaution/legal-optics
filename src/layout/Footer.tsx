import React from 'react';
import {
  FooterWrap,
  FooterTop,
  FooterTopInner,
  FooterBottom,
  InfoInner,
  LeftSection,
  CompanyInfo,
  RightSection,
  ContactGroup,
  SocialLinks,
  FooterBottomBar,
  CopyrightText,
  LegalLinks,
  InfoWrap,
  InfoTop
} from '../styles/footer.styles';
import Link from 'next/link';

export default function Footer({ extraBelowTop }: { extraBelowTop?: React.ReactNode }) {
  return (
    <FooterWrap>

      {/* FooterTop */}
      <FooterTop>
        <FooterTopInner>
          <h2>
            법률 자동화의 미래,
            <br />
            지역 일자리와 함께 만드는 리걸테크의 혁신.
          </h2>
          <hr />
          <h2>리걸 옵틱스가 앞장서겠습니다.</h2>
        </FooterTopInner>
      </FooterTop>

      {/* ★ 요금제가 들어갈 자리 — 반드시 FooterWrap 내부에 위치해야 함 */}
      {extraBelowTop && (
        <div style={{ marginTop: '40px' }}>
          {extraBelowTop}
        </div>
      )}

      {/* 회사 정보 영역 */}
      <FooterBottom>
        <InfoWrap>
          <InfoTop>
            <img className="footerLogo" src="/legal-optics/img/title_logo.png" alt="Legal Optics" />

            <SocialLinks>
              <a href="http://pf.kakao.com/_DJxgkn" target="_blank" rel="noopener noreferrer">
                <img src="/legal-optics/img/kakao.png" alt="KakaoTalk" />
              </a>
              <a href="https://blog.naver.com/legalpapers" target="_blank" rel="noopener noreferrer">
                <img src="/legal-optics/img/naver_blog.png" alt="NaverBlog" />
              </a>
              <a
                href="https://www.instagram.com/legaloptics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/legal-optics/img/instagram.png" alt="Instagram" />
              </a>
            </SocialLinks>
          </InfoTop>

          <InfoInner>
            <LeftSection>
              <CompanyInfo>
                <div className="company-name">리걸옵틱스</div>
                <p>대표자 : 최정인</p>
                <p>사업자등록번호 : 501-12-33730</p>
                <p>(47247) 부산광역시 부산진구 동천로 116, 3층 오픈오피스 B25, 26</p>
              </CompanyInfo>
            </LeftSection>

            <RightSection>
              <ContactGroup>
                <p>
                  <strong>TEL</strong> : 010-6801-9091
                </p>
                <p>
                  <strong>E-MAIL</strong> : legal-optics1@gmail.com
                </p>
              </ContactGroup>
            </RightSection>
          </InfoInner>
        </InfoWrap>

        <FooterBottomBar>
          <CopyrightText>© 2025 Legal Optics • All Rights Reserved</CopyrightText>

          <LegalLinks>
            <Link href="/">개인정보처리방침</Link>
            <span>|</span>
            <Link href="/">이용약관</Link>
            <span>|</span>
            <Link href="/">서비스 이용약관</Link>
          </LegalLinks>
        </FooterBottomBar>
      </FooterBottom>
    </FooterWrap>
  );
}
