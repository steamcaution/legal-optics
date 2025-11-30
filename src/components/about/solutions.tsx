import {
  FeatureList,
  SectionLead,
  SectionTitle,
  SolutionBadge,
  SolutionCard,
  SolutionsGrid,
  SolutionsSection
} from '../../styles/about.styles';
import React from 'react';

export const Solutions = () => {
  return (
    <SolutionsSection id="solutions">
      <div className="container">
        <SectionTitle>LegalOptics 솔루션</SectionTitle>
        <SectionLead>AI 기반 법률 문서 자동화로 업무 효율을 극대화하세요</SectionLead>
        <SolutionsGrid>
          <SolutionCard>
            <SolutionBadge>LxLens</SolutionBadge>
            <h3>거래 내역 도표화</h3>
            <p>복잡한 금융 거래내역을 한눈에 파악할 수 있는 시각적 도표로 자동 변환합니다.</p>
            <FeatureList>
              <li>금융사별 거래내역서 자동 인식</li>
              <li>AI 기반 데이터 구조화</li>
              <li>타임라인 시각화</li>
              <li>엑셀/PDF 다운로드 지원</li>
            </FeatureList>
          </SolutionCard>
          <SolutionCard>
            <SolutionBadge>DebtLens</SolutionBadge>
            <h3>부채 증명서 자동 입력</h3>
            <p>각종 채무 증명서류를 AI가 자동으로 읽고 정리하여 실무에 바로 활용 가능한 형태로 제공합니다.</p>
            <FeatureList>
              <li>채무 증명서 OCR 인식</li>
              <li>채권자/채무액 자동 추출</li>
              <li>부채 현황 요약 리포트</li>
              <li>변제 계획 수립 지원</li>
            </FeatureList>
          </SolutionCard>
          <SolutionCard>
            <SolutionBadge>ProofLens</SolutionBadge>
            <h3>소명자료 초안 작성</h3>
            <p>소명에 필요한 자료를 분석하여 초안을 자동 작성, 변호사의 검토 시간을 대폭 단축합니다.</p>
            <FeatureList>
              <li>문서 내용 자동 분석</li>
              <li>핵심 정보 추출 및 정리</li>
              <li>소명서 초안 자동 생성</li>
              <li>법률 용어 자동 적용</li>
            </FeatureList>
          </SolutionCard>
        </SolutionsGrid>
      </div>
    </SolutionsSection>
  );
};
