import React from 'react';
import {
  ProblemCard,
  ProblemCardTitle,
  ProblemGrid,
  ProblemIcon,
  ProblemList,
  ProblemSection,
  SectionTitle
} from '../../styles/about.styles';

export const MainProblem = () => {
  return (
    <ProblemSection>
      <SectionTitle>이런 고민 있으신가요?</SectionTitle>
      <ProblemGrid>
        <ProblemCard>
          <ProblemIcon>
            <img src="/legal-optics/img/icons/inefficient.png" alt="비효율적 문서 처리" />
          </ProblemIcon>
          <ProblemCardTitle>비효율적 문서 처리</ProblemCardTitle>
          <ProblemList>
            <li>반복적인 문서 처리 업무</li>
            <li>수작업으로 인한 오류 발생 위험</li>
            <li>문서 검토와 분석에 과도한 시간 소요</li>
            <li>업무 효율성 저하</li>
          </ProblemList>
        </ProblemCard>
        <ProblemCard>
          <ProblemIcon>
            <img src="/legal-optics/img/icons/workforce_time_consuming.png" alt="인력과 시간 소요" />
          </ProblemIcon>
          <ProblemCardTitle>인력과 시간 소요</ProblemCardTitle>
          <ProblemList>
            <li>고급 법률 인력이 단순 문서 작업에 투입</li>
            <li>인건비 증가로 인한 비용부담</li>
            <li>핵심 업무에 집중하기 어려운 환경</li>
            <li>업무 처리 지연으로 고객 만족도 하락</li>
          </ProblemList>
        </ProblemCard>
        <ProblemCard>
          <ProblemIcon>
            <img src="/legal-optics/img/icons/lack_of_efficiency_solutions.png" alt="효율화 솔루션 부족" />
          </ProblemIcon>
          <ProblemCardTitle>효율화 솔루션 부족</ProblemCardTitle>
          <ProblemList>
            <li>기존 솔루션은 고비용 구조</li>
            <li>한국 법률 환경에 특화된 솔루션 부재</li>
            <li>사용이 복잡하여 도입 장벽 높음</li>
            <li>실무 중심의 맞춤형 기능 부족</li>
          </ProblemList>
        </ProblemCard>
      </ProblemGrid>
    </ProblemSection>
  );
};
