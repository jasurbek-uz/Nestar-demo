import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UFT-8" />
      <meta name="robots" content="Nestar-Demo" />
      <meta name="title" content="index,follow" />
      <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
      /** SEO */
      <meta name="keyword" content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}/>

      <meta name="description" content={"Buy and sell properties anywere in South Korea.|" +
        "Покупайте и продавайте недвижимость в любой точке Южной Кореи |" +
        "한국에서 부동산을 사고 팔 수 있습니다." }/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
