import React from 'react';
import { HeaderInnerItem, HeaderTop, HeaderWrap, Nav, TitleLogo } from '../styles/common.styles';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderTop />
      <HeaderInnerItem>
        <TitleLogo href="/legal-optics">
          <img src="/img/title_logo.png" alt="Legal Optics" />
        </TitleLogo>

        <Nav>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          {/*<Link href="/service">Service</Link>*/}
          {/*<Link href="/">Login</Link>*/}
          {/*<Link href="/">Join</Link>*/}
        </Nav>
      </HeaderInnerItem>
    </HeaderWrap>
  );
}
