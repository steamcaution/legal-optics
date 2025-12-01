import React from 'react';
import { HeaderTop, HeaderWrap, Nav, TitleLogo } from '../styles/common.styles';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderTop />
      <TitleLogo href="/legal-optics">
        <img src="/legal-optics/img/title_logo.png" alt="Legal Optics" height={60} />
      </TitleLogo>

      <Nav>
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        {/*<Link href="/service">Service</Link>*/}
        {/*<Link href="/">Login</Link>*/}
        {/*<Link href="/">Join</Link>*/}
      </Nav>
    </HeaderWrap>
  );
}
