import styled from '@emotion/styled';

export const HomeMainSection = styled.div`
  min-height: 600px;
  height: calc(100vh - 100px);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-image: url('/legal-optics/img/background/image8.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HomeMainInner = styled.div`
  position: relative;
  min-bottom: 200px;
  bottom: 100px;
  left: 100px;
`;

export const HomeMainTitle = styled.h1`
  font-size: 52px;
  line-height: 1.3;
  color: #ffffff;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 24px;
`;

export const AboutButton = styled.a`
  display: inline-block;
  background: white;
  color: #0b161e;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;
