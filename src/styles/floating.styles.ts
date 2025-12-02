import styled from '@emotion/styled';

export const FloatingContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 999;
  pointer-events: none;

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    gap: 12px;
  }
`;

export const FloatingIconBase = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  pointer-events: auto;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const FloatingIcon = styled(FloatingIconBase)`
  background: #ffeb00;
  animation: slideUp 0.4s ease-out;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  &:hover {
    background: #fdd835;
  }
`;

export const ScrollTopIcon = styled(FloatingIconBase)`
  background: linear-gradient(135deg, #0080ff, #0055ff);
  color: white;
  animation: slideUp 0.4s ease-out;

  svg {
    width: 60%;
    height: 60%;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover {
    background: linear-gradient(135deg, #0055ff, #0040cc);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
