import React, { ReactElement } from 'react';
import Wrapper from '../../layout/wrapper';
import { AppPageLayoutProps } from '../../layout/wrapper.types';
import { NextPageWithLayout } from '../_app';
import { MainProblem } from '../../components/main/mainProblem';
import { MainSolutions } from '../../components/main/mainSolutions';
import { Process } from '../../components/about/process';
import { Technology } from '../../components/about/tech';

const Services: NextPageWithLayout = () => {
  return (
    <>
      <MainProblem />
      <MainSolutions />
      <Process />
      <Technology />
    </>
  );
};

export default Services;

Services.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...props}>{page}</Wrapper>;
};
