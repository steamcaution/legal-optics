import {
  PricingWrapper,
  PricingTitle,
  PricingSubtitle,
  PricingGrid,
  PricingCard,
  PricingCardTitle,
  PricingPrice,
  PricingVat,
  PricingSale,
  PricingBtn
} from '../../styles/services.styles';

export const PricingSection = ({ onPay }: { onPay?: (title: string, price: number | null) => void }) => {
  const plans = [
    { title: 'BASIC 요금제', price: '99,000원', vat: 'VAT 포함', note: null },
    { title: 'PREMIUM 요금제', price: '990,000원', vat: 'VAT 포함', note: null },
    { title: '무제한 요금제', price: null, vat: null, note: '별도 문의' }
  ];

  return (
    <PricingWrapper>
      <PricingTitle>요금제 안내</PricingTitle>
      <PricingSubtitle>안전한 네이버페이 결제로 간단하게 구독을 시작해보세요.</PricingSubtitle>

      <PricingGrid>
        {plans.map((plan, idx) => (
<PricingCard key={idx}>
  <PricingCardTitle>{plan.title}</PricingCardTitle>

  {/* 가격 영역 */}
  {plan.price ? (
    <PricingPrice>{plan.price}</PricingPrice>
  ) : (
    // 가격 placeholder
    <PricingPrice style={{ visibility: 'hidden' }}>placeholder</PricingPrice>
  )}

  {/* VAT or 문의 */}
  {plan.vat ? (
    <PricingVat>{plan.vat}</PricingVat>
  ) : (
    <>
      <PricingSale>{plan.note}</PricingSale>

      {/* VAT placeholder */}
      <PricingVat style={{ visibility: 'hidden' }}>placeholder</PricingVat>
    </>
  )}

  <PricingBtn
    onClick={() => {
      if (plan.note === '문의') {
        alert('무제한 요금제는 별도 문의가 필요합니다.');
        return;
      }
      const priceValue = plan.price
        ? Number(plan.price.replace(/[^0-9]/g, ''))
        : null;

      onPay?.(plan.title, priceValue);
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
