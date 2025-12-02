import React, { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';
import { TPageWrapper } from './wrapper.types';
import { Container, ContainerInner } from '../styles/common.styles';
import { PricingSection } from '../components/about/PricingSection';
import { useNaverPay } from '../lib/useNaverPay';
import { usePathname } from 'next/navigation';

interface WrapperProps extends TPageWrapper {
  children: ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => {
  const handlePay = useNaverPay();
  const pathname = usePathname();

  const isHome = pathname === '/';

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

      {/* ★ 요금제는 Footer 안으로 추가 전달 */}
      <Footer
        extraBelowTop={
          !isHome ? <PricingSection onPay={handlePay} /> : null
        }
      />
    </>
  );
};

export default Wrapper;
