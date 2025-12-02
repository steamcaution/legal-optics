import {
  PricingBtn,
  PricingCard,
  PricingCardTitle,
  PricingGrid,
  PricingPrice,
  PricingSale,
  PricingSubtitle,
  PricingTitle,
  PricingVat,
  PricingWrapper
} from '../../styles/services.styles';
import React from 'react';

export const pricingPlans = [
  { id: 'basic', title: 'BASIC 요금제', price: 99000 },
  { id: 'premium', title: 'PREMIUM 요금제', price: 990000 },
  { id: 'unlimited', title: '무제한 요금제', price: null }
];

export const Price = () => {
  const handlePay = (planName: string, amount: number | null) => {
    if (!globalThis.Naver?.Pay) {
      alert('네이버페이를 초기화 중입니다. 잠시 후 다시 시도해 주세요.');
      return;
    }

    try {
      const merchantPayKey = `PAY_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      globalThis.Naver.Pay.create({
        mode: 'development',
        clientId: 'HN3GGCMDdTgGUfl0kFCo',
        chainId: 'TXgyVHBNdWVwdTR',
        openType: 'popup'
      }).open({
        merchantPayKey,
        productName: planName,
        productCount: '1',
        totalPayAmount: String(amount),
        taxScopeAmount: String(amount),
        taxExScopeAmount: '0',
        returnUrl: 'https://developers.pay.naver.com/user/sand-box/payment'
      });
    } catch (err) {
      console.error('naver pay error:', err);
    }
  };

  return (
    <PricingWrapper>
      <PricingTitle>요금제 안내</PricingTitle>
      <PricingSubtitle>안전한 네이버페이 결제로 간단하게 구독을 시작해보세요.</PricingSubtitle>

      <PricingGrid>
        {pricingPlans.map(plan => (
          <PricingCard key={plan.id}>
            <PricingCardTitle>{plan.title}</PricingCardTitle>
            {plan.price ? (
              <>
                <PricingPrice>{plan.price.toLocaleString()}원</PricingPrice>
                <PricingVat>VAT 포함</PricingVat>
              </>
            ) : (
              <PricingSale>별도 문의</PricingSale>
            )}

            <PricingBtn
              onClick={() => {
                if (plan.id === 'unlimited') {
                  alert('무제한 요금제는 별도 문의가 필요합니다.');
                  return;
                }
                handlePay(plan.title, plan.price);
              }}
            >
              시작하기
            </PricingBtn>
          </PricingCard>
        ))}
      </PricingGrid>
    </PricingWrapper>
  );
};
