'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  SolutionBadge,
  SolutionButton,
  SolutionButtonWrapper,
  SolutionContent,
  SolutionImg,
  SolutionImgBox,
  SolutionItem,
  SolutionsContainer,
  SolutionsGrid,
  SolutionsHeader,
  SolutionsLead,
  SolutionsSection,
  SolutionsTitle,
  SolutionsTitleBrand,
  SolutionTitle
} from '../../styles/solutions.styles';

export const Solutions = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const solutions = [
    {
      label: 'LxLens',
      title: '거래 내역 도표화',
      image: '/img/lx_lens.png',
      alt: 'LxLens'
    },
    {
      label: 'DebtLens',
      title: '부채 증명서 자동 입력',
      image: '/img/debt_lens.png',
      alt: 'DebtLens'
    },
    {
      label: 'ProofLens',
      title: '소명자료 초안 작성',
      image: '/img/proof_lens.png',
      alt: 'ProofLens'
    }
  ];

  return (
    <SolutionsSection>
      <SolutionsContainer>
        <SolutionsHeader>
          <SolutionsTitle>
            법률 서비스의 혁신, <SolutionsTitleBrand>리걸 옵틱스</SolutionsTitleBrand>
          </SolutionsTitle>
          <SolutionsLead>업무에 효율을 더해보세요.</SolutionsLead>
        </SolutionsHeader>

        <SolutionsGrid>
          {solutions.map((solution, index) => (
            <SolutionItem
              key={solution.label}
              ref={el => {
                itemRefs.current[index] = el;
              }}
              data-visible={visibleItems[index]}
            >
              <SolutionImgBox>
                <SolutionImg>
                  <img src={solution.image} alt={solution.alt} />
                </SolutionImg>
              </SolutionImgBox>

              <SolutionContent>
                <SolutionBadge>{solution.label}</SolutionBadge>
                <SolutionTitle>{solution.title}</SolutionTitle>
              </SolutionContent>
            </SolutionItem>
          ))}
        </SolutionsGrid>

        <SolutionButtonWrapper>
          <SolutionButton href="#pricing">바로가기 &gt;</SolutionButton>
        </SolutionButtonWrapper>
      </SolutionsContainer>
    </SolutionsSection>
  );
};
