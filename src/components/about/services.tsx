'use client';

import React, { useEffect, useState } from 'react';
import {
  ServiceSection,
  ServiceNav,
  ServiceNavButton,
  ServiceOutput,
  OrgSection,
  OrgWrapper,
  OrgCard,
  OrgPhoto,
  OrgRole,
  OrgName,
  OrgLine,
  OrgDetailOutput,
  SnsSection,
  SnsTitle,
  SnsDesc,
  SnsFlex,
  SnsCardLink,
  SnsOverlay,
  SnsInfo,
  SnsName,
  SnsSub,
  PricingWrapper,
  PricingTitle,
  PricingSubtitle,
  PricingGrid,
  PricingCard,
  PricingCardTitle,
  PricingPrice,
  PricingVat,
  PricingSale,
  PricingBtn,
  DetailBox,
  DetailImage,
  DetailText
} from '../../styles/services.styles';

interface PersonDetail {
  [key: string]: {
    name: string;
    role: string;
    description: string;
    expertise: string;
    career: string[];
    image: string;
  };
}

declare global {
  interface Window {
    Naver?: any;
  }
}

export const Services = () => {
  const [activeTab, setActiveTab] = useState('org');
  const [openPerson, setOpenPerson] = useState<string | null>(null);

  const [naverPay, setNaverPay] = useState<any>(null);

  /* ---------------------------------------------------
     [1] 네이버페이 SDK 로드
  --------------------------------------------------- */
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://nsp.pay.naver.com/sdk/js/naverpay.min.js';
    script.async = true;

    script.onload = () => {
      if (window.Naver?.Pay) {
        const pay = window.Naver.Pay.create({
          mode: 'development', // production 변경 가능
          clientId: 'HN3GGCMDdTgGUfl0kFCo',
          chainId: 'TXgyVHBNdWVwdTR'
        });
        setNaverPay(pay);
      }
    };

    document.body.appendChild(script);
  }, []);

  /* ---------------------------------------------------
     [2] 결제 호출 함수
  --------------------------------------------------- */
  const handlePay = (planName: string, amount: number | null) => {
    if (!naverPay) {
      alert('네이버페이를 초기화 중입니다. 잠시 후 다시 시도해 주세요.');
      return;
    }

    const merchantPayKey = `PAY_${Date.now()}`;

    naverPay.open({
      merchantPayKey,
      productName: planName,
      productCount: '1',
      totalPayAmount: amount ? String(amount) : '0',
      taxScopeAmount: amount ? String(amount) : '0',
      taxExScopeAmount: '0',
      returnUrl: 'https://developers.pay.naver.com/user/sand-box/payment'
    });
  };

  /* ---------------------------------------------------
     데이터 원본 (그대로 유지)
  --------------------------------------------------- */

  const personDetail: PersonDetail = {
    lawyer: {
      name: '강민재',
      role: 'CSO',
      description:
        "리걸옵틱스의 브랜딩 전략 총괄로, 변호사 콘텐츠 운영 구조 설계와\n분석 기반의 시각 커뮤니케이션 전략을 담당합니다.\n'법률 브랜드 확장'에 특화된 디렉션을 제공합니다.",
      expertise: '법률 브랜딩 / 콘텐츠 전략 / 시각 기획 / 변호사 포지셔닝',
      career: [
        '리걸옵틱스 설립 및 총괄',
        '법률 브랜드 전략 구조화 프로젝트 다수 수행',
        '변호사 영상·SNS·콘텐츠 풀패키지 구축 PM'
      ],
      image: '/legal-optics/img/full_lawyer.png'
    },
    director: {
      name: '최정인',
      role: 'CEO',
      description:
        "AI 기반 OCR·문서 구조 분석·자동화 처리 시스템을 개발하며,\n법률 문서 흐름을 디지털 중심으로 재구성하는 역할을 담당합니다.\n'문서 자동화·지능형 분석'에 특화된 솔루션을 제공합니다.",
      expertise: 'OCR 엔진 최적화 / NLP 기반 문장 분류 / PDF 파싱 / 문서 자동화 파이프라인 구축',
      career: [
        '법률 문서 자동화 엔진 개발',
        'AI OCR 기반 문장 단위 추출 및 구조화 알고리즘 구축',
        'Legal Optics 자동화 시스템 핵심 개발자',
        'Python · Node.js · FastAPI 기반 백엔드 개발'
      ],
      image: '/legal-optics/img/full_director.png'
    }
  };

  const orgMembers = [
    { id: 'lawyer', role: 'CSO', name: '강민재', image: 'img/profile_lawyer.png' },
    { id: 'director', role: 'CEO', name: '최정인', image: 'img/profile_director.png' }
  ];

  const snsChannels = [
    {
      name: 'YouTube',
      sub: '사건파일 시리즈',
      image: '/legal-optics/img/video_sum.png',
      link: 'https://nas.sonny.co.kr/api/public/dl/PIARiVaZ?inline=true'
    },
    {
      name: 'Blog',
      sub: '판례·송무사례 해설',
      image: '/legal-optics/img/blog.jpg',
      link: 'https://blog.naver.com/legalpapers'
    },
    {
      name: 'Instagram',
      sub: '브랜딩·일상 스냅',
      image: '/legal-optics/img/star.png',
      link: 'https://www.instagram.com/p/DRgNFgTEnRm/'
    }
  ];

  const pricingPlans = [
    { title: 'BASIC 요금제', price: '99,000원', vat: 'VAT 포함', note: null },
    { title: 'PREMIUM 요금제', price: '990,000원', vat: 'VAT 포함', note: null },
    { title: '무제한 요금제', price: null, vat: null, note: '문의' }
  ];

  /* ---------------------------------------------------
     렌더링 컨텐츠
  --------------------------------------------------- */
  const renderContent = () => {
    switch (activeTab) {
      case 'org':
        return (
          <OrgSection>
            <SnsTitle style={{ marginBottom: '10px' }}>조직도</SnsTitle>
            <SnsDesc style={{ marginBottom: '50px' }}>
              법률 브랜딩·콘텐츠 제작 전 과정을 담당하는 전문가 팀입니다.
            </SnsDesc>

            <OrgWrapper>
              {orgMembers.map((member, idx) => (
                <React.Fragment key={member.id}>
                  <OrgCard onClick={() => setOpenPerson(openPerson === member.id ? null : member.id)}>
                    <OrgPhoto style={{ backgroundImage: `url('${member.image}')` }} />
                    <OrgRole>{member.role}</OrgRole>
                    <OrgName>{member.name}</OrgName>
                  </OrgCard>
                  {idx === 0 && <OrgLine />}
                </React.Fragment>
              ))}
            </OrgWrapper>

            {openPerson && personDetail[openPerson] && (
              <OrgDetailOutput>
                <DetailBox>
                  <DetailImage style={{ backgroundImage: `url('${personDetail[openPerson].image}')` }} />
                  <DetailText>
                    <h3>{personDetail[openPerson].name}</h3>
                    <p>{personDetail[openPerson].description}</p>

                    <div>
                      <strong>전문 분야</strong>
                      <br />
                      <span>{personDetail[openPerson].expertise}</span>
                    </div>

                    <div style={{ marginTop: '16px' }}>
                      <strong>주요 경력</strong>
                      <br />
                      <span>
                        {personDetail[openPerson].career.map((item, i) => (
                          <React.Fragment key={i}>
                            · {item}
                            {i < personDetail[openPerson].career.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  </DetailText>
                </DetailBox>
              </OrgDetailOutput>
            )}
          </OrgSection>
        );

      case 'sns':
        return (
          <SnsSection>
            <SnsTitle>SNS 채널</SnsTitle>
            <SnsDesc>
              SNS 채널은 변호사 브랜딩의 핵심 자산입니다.
              <br />
              시각 전략·콘텐츠 제작·포트폴리오 구축 과정을 통해
              <br />
              전문성과 신뢰도를 효과적으로 전달할 수 있습니다.
            </SnsDesc>

            <SnsFlex>
              {snsChannels.map(channel => (
                <SnsCardLink
                  key={channel.name}
                  href={channel.link}
                  target="_blank"
                  style={{ backgroundImage: `url('${channel.image}')` }}
                >
                  <SnsOverlay />
                  <SnsInfo>
                    <SnsName>{channel.name}</SnsName>
                    <SnsSub>{channel.sub}</SnsSub>
                  </SnsInfo>
                </SnsCardLink>
              ))}
            </SnsFlex>
          </SnsSection>
        );

      case 'price':
        return (
          <PricingWrapper>
            <PricingTitle>요금제 안내</PricingTitle>
            <PricingSubtitle>안전한 네이버페이 결제로 간단하게 구독을 시작해보세요.</PricingSubtitle>

            <PricingGrid>
              {pricingPlans.map((plan, idx) => (
                <PricingCard key={idx}>
                  <PricingCardTitle>{plan.title}</PricingCardTitle>

                  {plan.price && <PricingPrice>{plan.price}</PricingPrice>}
                  {plan.vat && <PricingVat>{plan.vat}</PricingVat>}
                  {plan.note && <PricingSale>{plan.note}</PricingSale>}

                  <PricingBtn
                    onClick={() => {
                      if (plan.note === '문의') {
                        alert('무제한 요금제는 별도 문의가 필요합니다.');
                        return;
                      }

                      const priceValue = plan.price
                        ? Number(plan.price.replace(/[^0-9]/g, ''))
                        : null;

                      handlePay(plan.title, priceValue);
                    }}
                  >
                    시작하기
                  </PricingBtn>
                </PricingCard>
              ))}
            </PricingGrid>
          </PricingWrapper>
        );

      default:
        return null;
    }
  };

  /* ---------------------------------------------------
     최종 렌더
  --------------------------------------------------- */
  return (
    <ServiceSection>
      <ServiceNav>
        <ServiceNavButton className={activeTab === 'org' ? 'active' : ''} onClick={() => setActiveTab('org')}>
          조직도
        </ServiceNavButton>

        <ServiceNavButton className={activeTab === 'sns' ? 'active' : ''} onClick={() => setActiveTab('sns')}>
          SNS 채널
        </ServiceNavButton>

        <ServiceNavButton className={activeTab === 'price' ? 'active' : ''} onClick={() => setActiveTab('price')}>
          요금제
        </ServiceNavButton>
      </ServiceNav>

      <ServiceOutput>{renderContent()}</ServiceOutput>
    </ServiceSection>
  );
};
