import React from 'react';
import { HeaderInnerItem, HeaderTop, HeaderWrap, Nav, TitleLogo } from '../styles/common.styles';
import Link from 'next/link';
import { getAssetPath } from '../lib/getAssertPath';

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderTop />
      <HeaderInnerItem>
        <TitleLogo>
          <Link href="/">
            <img src={getAssetPath('/img/title_logo.png')} alt="Legal Optics" />
          </Link>
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
