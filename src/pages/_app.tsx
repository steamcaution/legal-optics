import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider, Global } from '@emotion/react';
import Head from 'next/head';
import { AppPageLayoutProps } from '../layout/wrapper.types';
import { NextPage } from 'next';
import '../styles/_base.scss';
import { createAppCache } from '../lib/create-emotion-cache';
import { GlobalFontStyles } from '../styles/common.styles';
import Script from 'next/script';

export type NextPageWithLayout<P = AppPageLayoutProps, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, props: AppPageLayoutProps) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

const clientSideEmotionCache = createAppCache();

export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link
          rel="preload"
          href="/legal-optics/fonts/BookkMyungjo_Light.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>Legal Optics</title>
      </Head>
      <Script src="https://nsp.pay.naver.com/sdk/js/naverpay.min.js" strategy="beforeInteractive" />
      <Global styles={GlobalFontStyles} />
      {getLayout(<Component {...pageProps} />, pageProps)}
    </CacheProvider>
  );
}
