import React, { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';
import { TPageWrapper } from './wrapper.types';
import { Container, ContainerInner } from '../styles/common.styles';

interface WrapperProps extends TPageWrapper {
  children: ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      <Container>
        <div className="content">
          <ContainerInner>
            <div>{children}</div>
          </ContainerInner>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Wrapper;
