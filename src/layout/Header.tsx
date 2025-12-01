import React from 'react';
import { HeaderInner, HeaderWrap, Nav, TitleLogo } from '../styles/common.styles';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderInner>
        <TitleLogo href="/legal-optics">
          <img src="/legal-optics/img/title_logo.png" alt="Legal Optics" width={180} />
        </TitleLogo>

        <Nav>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          {/*<Link href="/service">Service</Link>*/}
          {/*<Link href="/">Login</Link>*/}
          {/*<Link href="/">Join</Link>*/}
        </Nav>
      </HeaderInner>
    </HeaderWrap>
  );
}
