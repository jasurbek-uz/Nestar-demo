import { Html, Head, Main, NextScript } from "next/document";


// Biz bu yerda websaytimizni meta logosi nomi va rasmi internnetdan chiqib turadigan qilamiz shu faylda
export default function Document() {
	return (
		<Html lang="en">
      <Head>
				<meta charSet="UTF-8" />
				<meta name="title" content="Nestar Demo" /> 
				<meta name="robots" content="index, follow" />
				<link rel="icon" href="/img/logo/favicon.svg" />

				<meta
					name="keyword"
					content={"nestar, nestar.uz, devex mern, mern nest js fullstack"} // modify
				/>
				<meta
					name="description"
					content={
						"Buy and sell properties anywhere anytime in South Korea.  | " +
						"Покупайте и продавайте недвижимость в любой точке Южной Кореи в любое время. |" +
						"대한민국 언제 어디서나 부동산을 사고팔 수 있습니다."
					}
        />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
