import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';


export default function Document() {
  return (
    <Html>
        <Head>
        <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="styles.css" />
        </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}