import {
  ProcessSection,
  SectionLead,
  SectionTitle,
  SimpleProcessArrow,
  SimpleProcessFlow,
  SimpleProcessStep,
  SimpleStepIcon,
  SimpleStepNumber
} from '../../styles/about.styles';
import React from 'react';

export const Process = () => {
  return (
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
  );
};
