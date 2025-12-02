import React from 'react';
import {
  CompanyInfo,
  ContactGroup,
  CopyrightText,
  FooterBottomBar,
  FooterWrap,
  InfoInner,
  InfoTop,
  InfoWrap,
  LeftSection,
  LegalLinks,
  RightSection,
  SocialLinks
} from '../styles/footer.styles';
import Link from 'next/link';

export default function Footer() {
  return (
    <FooterWrap>
      <InfoWrap>
        <InfoTop>
          <img className="footerLogo" src="/legal-optics/img/title_logo.png" alt="Legal Optics" />

          <SocialLinks>
            <a href="http://pf.kakao.com/_DJxgkn" title="KakaoTalk" target="_blank" rel="noopener noreferrer">
              <img src="/legal-optics/img/kakao.png" alt="KakaoTalk" />
            </a>
            <a href="https://blog.naver.com/legalpapers" title="Blog" target="_blank" rel="noopener noreferrer">
              <img src="/legal-optics/img/naver_blog.png" alt="NaverBlog" />
            </a>
            <a
              href="https://www.instagram.com/legaloptics/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/legal-optics/img/instagram.png" alt="Instagram" />
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
              {/*<p>통신판매업 신고번호 : 2025-0000-00000</p>*/}
              <p>(47247) 부산광역시 부산진구 동천로 116, 3층 오픈오피스 B25, 26 (전포동, 한신밴)</p>
            </CompanyInfo>
          </LeftSection>

          {/* 우측: 연락처 및 SNS */}
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
    </FooterWrap>
  );
}
