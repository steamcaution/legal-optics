import React, { useEffect, useState } from 'react';
import { FloatingContainer, FloatingIcon, ScrollTopIcon } from '../styles/floating.styles';

export const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isKakaoVisible, setIsKakaoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 300) {
        setIsVisible(true);
        setIsKakaoVisible(true);
      } else {
        setIsVisible(false);
        setIsKakaoVisible(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 카카오톡 이동
  const openKakao = () => {
    window.open('https://pf.kakao.com/_DJxgkn');
  };

  return (
    <FloatingContainer>
      {/* 카톡 버튼 */}

      {isKakaoVisible && (
        <FloatingIcon onClick={openKakao} title="카카오톡 문의">
          <img src="/legal-optics/img/icon/kakao.png" alt="kakao" />
        </FloatingIcon>
      )}

      {/* 상단이동 버튼 (스크롤 시에만 표시) */}
      {isVisible && (
        <ScrollTopIcon onClick={scrollToTop} title="상단으로 이동">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </ScrollTopIcon>
      )}
    </FloatingContainer>
  );
};
