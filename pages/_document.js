import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
        <Head>
        <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="styles.css" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}