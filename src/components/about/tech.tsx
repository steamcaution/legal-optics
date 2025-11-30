import {
  CompetitiveCard,
  CompetitiveGrid,
  CompIcon,
  ProblemBox,
  SectionLead,
  SectionTitle,
  SolutionBox,
  TechContent,
  TechnologySection,
  TechProblemSolution
} from '../../styles/about.styles';
import React from 'react';

export const Technology = () => {
  return (
    <TechnologySection>
      <div className="container">
        <SectionTitle>차별화된 기술력</SectionTitle>
        <SectionLead>법률 문서 특화 AI 기술로 높은 정확도를 자랑합니다</SectionLead>
        <TechContent>
          <TechProblemSolution>
            <ProblemBox>
              <h3>❌ 기존 솔루션의 한계</h3>
              <ul>
                <li>기울어짐, 어두움, 배경 노이즈로 인해 OCR 정확도 저하</li>
                <li>숫자/법률 용어 오인식</li>
                <li>좌표, 필드 매핑 오류로 인해 법률 문서 내 핵심 정보 추출 실패</li>
                <li>인감, 도장, 테이블, 수기 메모 등 다양한 형식이 섞여 인식 실패</li>
              </ul>
            </ProblemBox>
            <SolutionBox>
              <h3>✅ LegalOptics의 솔루션</h3>
              <ul>
                <li>AI 기반 전처리로 OCR 최적 입력 생성</li>
                <li>표, 항목, 도장 영역을 자동 탐지하여 영역별 최적 OCR 수행</li>
                <li>사전, 규칙 기반 교정 알고리즘으로 오인식 최소화</li>
                <li>인식된 텍스트를 구조화(필드 매핑, JSON/엑셀 변환)</li>
              </ul>
            </SolutionBox>
          </TechProblemSolution>

          <CompetitiveGrid>
            <CompetitiveCard>
              <CompIcon>🤖</CompIcon>
              <h4>AI + OCR 기술</h4>
              <p>법률 문서 자동 인식 및 텍스트 추출, 자체 개발 AI 모듈로 문서 인식 정확도 개선</p>
            </CompetitiveCard>
            <CompetitiveCard>
              <CompIcon>🎯</CompIcon>
              <h4>맞춤형 처리</h4>
              <p>금융사별 거래내역서 맞춤형 처리, 실무 활용 가능한 데이터 형태 제공</p>
            </CompetitiveCard>
            <CompetitiveCard>
              <CompIcon>🔧</CompIcon>
              <h4>모듈화 구조</h4>
              <p>다양한 문서/금융 데이터 확장성 확보, 새로운 문서 유형 추가 용이</p>
            </CompetitiveCard>
            <CompetitiveCard>
              <CompIcon>💻</CompIcon>
              <h4>직관적 UI/UX</h4>
              <p>실무자가 쉽게 문서 업로드 및 검토, 간편한 드래그앤드롭 인터페이스</p>
            </CompetitiveCard>
            <CompetitiveCard>
              <CompIcon>💰</CompIcon>
              <h4>합리적 가격</h4>
              <p>경쟁사 대비 투명하고 합리적한 가격, SaaS 모델로 중소형 법률 사무소도 쉽게 도입</p>
            </CompetitiveCard>
          </CompetitiveGrid>
        </TechContent>
      </div>
    </TechnologySection>
  );
};
