import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getAssetPath } from '../lib/getAssertPath';

export const GlobalFontStyles = css`
  @font-face {
    font-family: 'BookkMyungjo';
    font-display: fallback;
    src: url('${getAssetPath('/fonts/BookkMyungjo_Light.woff')}') format('truetype');
    font-style: normal;
  }
`;

export const HeaderWrap = styled.header`
  background: rgba(22, 44, 63, 0.6);
  color: white;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  min-width: 600px;
  z-index: 1000;
  padding: 0 80px;
`;

export const HeaderTop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #0b161e;
  color: white;
  box-shadow: none;
  padding: 0 80px;
  height: 15px;
`;

export const HeaderInnerItem = styled.div`
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 50px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 80px;
  align-items: center;
  height: 100%;

  a {
    color: #f8f8f8;
    font-size: 22px;
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
  padding-top: 15px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background: #0b161e;
`;

export const ContainerInner = styled.div`
  margin: 0 auto;
`;
