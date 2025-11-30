import React, { ReactElement } from 'react';
import Wrapper from '../../layout/wrapper';
import { AppPageLayoutProps } from '../../layout/wrapper.types';
import { NextPageWithLayout } from '../_app';
import { Problem } from '../../components/about/problem';
import { Solutions } from '../../components/about/solutions';
import { Process } from '../../components/about/process';
import { Technology } from '../../components/about/tech';

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <Problem />
      <Solutions />
      <Process />
      <Technology />
    </>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...props}>{page}</Wrapper>;
};
