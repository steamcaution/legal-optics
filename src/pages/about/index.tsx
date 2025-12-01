import React, { ReactElement } from 'react';
import Wrapper from '../../layout/wrapper';
import { AppPageLayoutProps } from '../../layout/wrapper.types';
import { NextPageWithLayout } from '../_app';
import { Problem } from '../../components/about/problem';
import {
  CompetitiveCard,
  CompetitiveGrid,
  CompIcon,
  FeatureList,
  ProblemBox,
  ProcessSection,
  SectionLead,
  SectionTitle,
  SimpleProcessArrow,
  SimpleProcessFlow,
  SimpleProcessStep,
  SimpleStepIcon,
  SimpleStepNumber,
  SolutionBadge,
  SolutionBox,
  SolutionCard,
  SolutionsGrid,
  SolutionsSection,
  TechContent,
  TechnologySection,
  TechProblemSolution
} from '../../styles/about.styles';
import { Services } from '../../components/about/services';

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <Problem />

      {/* Solutions Section */}
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

      {/* How It Works Section */}
      <ProcessSection>
        <div className="container">
          <SectionTitle>이렇게 사용합니다</SectionTitle>
          <SectionLead>간단한 3단계로 법률 문서를 자동으로 처리하세요</SectionLead>
          <SimpleProcessFlow>
            <SimpleProcessStep>
              <SimpleStepNumber>1</SimpleStepNumber>
              <SimpleStepIcon>📤</SimpleStepIcon>
              <h4>문서 업로드</h4>
              <p>
                처리하고 싶은 법률 문서를
                <br />
                드래그앤드롭으로 업로드
              </p>
            </SimpleProcessStep>
            <SimpleProcessArrow>→</SimpleProcessArrow>
            <SimpleProcessStep>
              <SimpleStepNumber>2</SimpleStepNumber>
              <SimpleStepIcon>🤖</SimpleStepIcon>
              <h4>AI 자동 분석</h4>
              <p>
                AI가 문서를 읽고 분석하여
                <br />
                핵심 정보를 자동 추출
              </p>
            </SimpleProcessStep>
            <SimpleProcessArrow>→</SimpleProcessArrow>
            <SimpleProcessStep>
              <SimpleStepNumber>3</SimpleStepNumber>
              <SimpleStepIcon>✅</SimpleStepIcon>
              <h4>결과 확인 및 다운로드</h4>
              <p>
                정리된 데이터를 확인하고
                <br />
                엑셀, PDF로 다운로드
              </p>
            </SimpleProcessStep>
          </SimpleProcessFlow>
        </div>
      </ProcessSection>

      {/* Technology Section */}
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

      <Services />
    </>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...props}>{page}</Wrapper>;
};
