import styled from '@emotion/styled';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/legal-optics';

export const GlobalFontStyles = `
  @font-face {
    font-family: 'BookkMyungjo';
    src: url('${basePath}/fonts/BookkMyungjo_Light.ttf') format('truetype');
    font-style: normal;
    font-display: fallback;
  }
`;

export const HeaderWrap = styled.header`
  background: #162c3f;
  color: white;
  box-shadow: none;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 1000;
  padding: 0 80px;
`;

export const HeaderTop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #162c3f;
  color: white;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 15px;
`;

export const TitleLogo = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  img {
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 80px;
  align-items: center;
  height: 100%;

  a {
    color: #f8f8f8;
    font-size: 24px;
    text-decoration: none;
    margin-top: 7px;
    font-weight: bold;
    position: relative;
    padding-left: 6px;
    transition:
      color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
      opacity 0.2s ease;

    &:hover {
      transform: scale(1.1);
      transform-origin: center center;
    }

    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #ffffff;
      top: -6px;
      left: -4px;
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1px 0 rgba(0, 0, 0, 0.03);
      opacity: 0;
    }
    &:hover::before {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  padding-top: 100px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background: #0b161e;
`;

export const ContainerInner = styled.div`
  margin: 0 auto;
`;
