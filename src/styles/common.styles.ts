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
  background: #0b161e;
  color: white;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 110px;
  z-index: 1000;
`;

export const HeaderInner = styled.div`
  background: #162c3f;
  min-width: 1200px;
  margin: 25px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 90px;
  z-index: 1001;
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
    font-size: 20px;
    text-decoration: none;
    margin-top: 2px;
    font-weight: bold;
    position: relative;
    padding-left: 6px;
    transition:
      color 0.25s cubic-bezier(0.16, 1, 0.3, 1),
      opacity 0.2s ease;

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
  padding-top: 110px;
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  background: #0b161e;
`;

export const ContainerInner = styled.div`
  margin: 0 auto;
`;
