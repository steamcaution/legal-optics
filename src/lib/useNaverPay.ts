import { useEffect, useState } from 'react';

export const useNaverPay = () => {
  const [naverPay, setNaverPay] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://nsp.pay.naver.com/sdk/js/naverpay.min.js';
    script.async = true;

    script.onload = () => {
      const w = window as typeof window & {
        Naver?: {
          Pay: { create: (config: any) => any }
        }
      };

      if (w.Naver?.Pay) {
        const pay = w.Naver.Pay.create({
          mode: 'development',
          clientId: 'HN3GGCMDdTgGUfl0kFCo',
          chainId: 'TXgyVHBNdWVwdTR'
        });
        setNaverPay(pay);
      }
    };

    document.body.appendChild(script);
  }, []);

  return (planName: string, amount: number | null) => {
    if (!naverPay) {
      alert('네이버페이를 초기화 중입니다.');
      return;
    }

    const key = `PAY_${Date.now()}`;

    naverPay.open({
      merchantPayKey: key,
      productName: planName,
      productCount: '1',
      totalPayAmount: amount ? String(amount) : '0',
      taxScopeAmount: amount ? String(amount) : '0',
      taxExScopeAmount: '0',
      returnUrl: 'https://developers.pay.naver.com/user/sand-box/payment'
    });
  };
};
