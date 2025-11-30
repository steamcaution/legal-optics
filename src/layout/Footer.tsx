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

export default function Footer() {
  return (
    <FooterWrap>
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

      <FooterBottom>
        <InfoWrap>
          <InfoTop>
            <img className="footerLogo" src="/legal-optics/img/title_logo.png" alt="Legal Optics" />

            <SocialLinks>
              <a href="http://pf.kakao.com/_DJxgkn" title="KakaoTalk" target="_blank" rel="noopener noreferrer">
                <img src="/legal-optics/img/kakao.png" alt="KakaoTalk" width={24} />
              </a>
              <a href="https://blog.naver.com/legalpapers" title="Blog" target="_blank" rel="noopener noreferrer">
                <img src="/legal-optics/img/naver_blog.png" alt="NaverBlog" width={34} />
              </a>
            </SocialLinks>
          </InfoTop>
          <InfoInner>
            {/* 좌측: 회사 정보 */}
            <LeftSection>
              <CompanyInfo>
                <div className="company-name">리걸옵틱스</div>
                <p>대표자 : 최정인</p>
                <p>사업자등록번호 : 501-12-33730</p>
                <p>통신판매업 신고번호 : 2025-0000-00000</p>
                <p>(47247) 부산광역시 부산진구 동천로 116, 3층 오픈오피스 B25, 26 (전포동, 한신밴)</p>
              </CompanyInfo>
            </LeftSection>

            {/* 우측: 연락처 및 SNS */}
            <RightSection>
              <ContactGroup>
                <p>
                  <strong>TEL</strong> : 02-6207-1122
                </p>
                <p>
                  <strong>E-MAIL</strong> : info@legaloptics.com
                </p>
              </ContactGroup>
            </RightSection>
          </InfoInner>
        </InfoWrap>

        {/* 하단 바: 저작권, 법률링크 */}
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
