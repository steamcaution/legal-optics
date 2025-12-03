import {
  DetailBox,
  DetailImage,
  DetailText,
  OrgCard,
  OrgDetailOutput,
  OrgLine,
  OrgName,
  OrgRole,
  OrgSection,
  OrgWrapper,
  SnsDesc,
  SnsTitle
} from '../../styles/services.styles';
import React, { useState } from 'react';

export const Organization = () => {
  const [openPerson, setOpenPerson] = useState<string | null>(null);

  const personDetail = {
    lawyer: {
      name: '강민재',
      role: 'CFO',
      description:
        "리걸옵틱스의 브랜딩 전략 총괄로, 변호사 콘텐츠 운영 구조 설계와\n분석 기반의 시각 커뮤니케이션 전략을 담당합니다.\n'법률 브랜드 확장'에 특화된 디렉션을 제공합니다.",
      expertise: '법률 브랜딩 / 콘텐츠 전략 / 시각 기획 / 변호사 포지셔닝',
      career: [
        '리걸옵틱스 설립 및 총괄',
        '법률 브랜드 전략 구조화 프로젝트 다수 수행',
        '변호사 영상·SNS·콘텐츠 풀패키지 구축 PM'
      ]
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
      ]
    }
  };

  const orgMembers = [
    { id: 'lawyer', role: 'CFO', name: '강민재' },
    { id: 'director', role: 'CEO', name: '최정인' }
  ];

  return (
    <OrgSection>
      <SnsTitle style={{ marginBottom: '10px' }}>조직도</SnsTitle>
      <SnsDesc style={{ marginBottom: '50px' }}>법률 브랜딩·콘텐츠 제작 전 과정을 담당하는 전문가 팀입니다.</SnsDesc>

      <OrgWrapper>
        {orgMembers.map((member, idx) => (
          <React.Fragment key={member.id}>
            <OrgCard onClick={() => setOpenPerson(openPerson === member.id ? null : member.id)}>
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
                <span>{personDetail[openPerson].expertise}</span>
              </div>

              <div>
                <strong>주요 경력</strong>
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
};
