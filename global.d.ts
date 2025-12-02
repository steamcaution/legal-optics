declare global {
  interface Window {
    Kakao: any;
    Naver?: {
      Pay: {
        create: (config: any) => any;
      };
    };
  }
}

export {};
