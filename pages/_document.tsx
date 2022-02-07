// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

const fonts = [
  "Rota-BlackItalic.woff2",
  "Rota-BlackItalic.woff",
  "Rota-Bold.woff2",
  "Rota-Bold.woff",
  "Rota-Black.woff2",
  "Rota-Black.woff",
  "Rota-ExtraLightItalic.woff2",
  "Rota-ExtraLightItalic.woff",
  "Rota-ExtraLight.woff2",
  "Rota-ExtraLight.woff",
  "Rota-Light.woff2",
  "Rota-Light.woff",
  "Rota-ExtraBoldItalic.woff2",
  "Rota-ExtraBoldItalic.woff",
  "Rota-ExtraBlack.woff2",
  "Rota-ExtraBlack.woff",
  "Rota-Italic.woff2",
  "Rota-Italic.woff",
  "Rota-ExtraBold.woff2",
  "Rota-ExtraBold.woff",
  "Rota-ExtraBlackItalic.woff2",
  "Rota-ExtraBlackItalic.woff",
  "Rota-BoldItalic.woff2",
  "Rota-BoldItalic.woff",
  "Rota-Medium.woff2",
  "Rota-Medium.woff",
  "Rota-LightItalic.woff2",
  "Rota-LightItalic.woff",
  "Rota-Regular.woff2",
  "Rota-Regular.woff",
  "Rota-SemiBold.woff2",
  "Rota-SemiBold.woff",
  "Rota-MediumItalic.woff2",
  "Rota-MediumItalic.woff",
  "Rota-Thin.woff2",
  "Rota-Thin.woff",
  "Rota-ThinItalic.woff2",
  "Rota-ThinItalic.woff",
  "Rota-SemiBoldItalic.woff2",
  "Rota-SemiBoldItalic.woff",
];

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {fonts.map((font) => (
            <link
              key={font}
              rel="preload"
              href={`assets/fonts/${font}`}
              as="font"
              type="font/woff"
              crossOrigin="true"
            />
          ))}
          <link href="./assets/css/rota.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
