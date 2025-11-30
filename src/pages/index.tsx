import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { AppPageLayoutProps } from '../layout/wrapper.types';
import Wrapper from '../layout/wrapper';
import { AboutButton, MainTitle } from '../styles/main.styles';

const Main: NextPageWithLayout = () => {
  return (
    <>
      <MainTitle>
        법률 사무관리의 혁신,
        <br />
        지금 경험하세요
      </MainTitle>
      <AboutButton href="/about">Go to LegalOptics &gt;</AboutButton>
    </>
  );
};

export default Main;

Main.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...{ props, isMainSection: true }}>{page}</Wrapper>;
};
