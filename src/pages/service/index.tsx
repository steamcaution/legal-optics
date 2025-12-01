import React, { ReactElement } from 'react';
import Wrapper from '../../layout/wrapper';
import { AppPageLayoutProps } from '../../layout/wrapper.types';
import { NextPageWithLayout } from '../_app';
import { Problem } from '../../components/main/problem';
import { Solutions } from '../../components/main/solutions';
import { Process } from '../../components/about/process';
import { Technology } from '../../components/about/tech';

const Services: NextPageWithLayout = () => {
  return (
    <>
      <Problem />
      <Solutions />
      <Process />
      <Technology />
    </>
  );
};

export default Services;

Services.getLayout = function getLayout(page: ReactElement, props: AppPageLayoutProps) {
  return <Wrapper {...props}>{page}</Wrapper>;
};
