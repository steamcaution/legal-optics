import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { AppPageLayoutProps } from '../layout/wrapper.types';
import Wrapper from '../layout/wrapper';
import { AboutButton, HomeMainInner, HomeMainSection, HomeMainTitle } from '../styles/main.styles';
import { FooterMessage } from '../components/footer/footer_msg';

const Main: NextPageWithLayout = () => {
  return (
    <>
      <HomeMainSection>
        <HomeMainInner>
          <HomeMainTitle>
            법률 사무관리의 혁신,
            <br />
            지금 경험하세요
          </HomeMainTitle>
          <AboutButton href="/legal-optics/about">Go to LegalOptics &gt;</AboutButton>
        </HomeMainInner>
      </HomeMainSection>
      <FooterMessage />
    </>
  );
};

export default Main;

Main.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...props}>{page}</Wrapper>;
};
