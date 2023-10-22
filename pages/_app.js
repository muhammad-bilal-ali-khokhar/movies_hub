import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "../public/css/home.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pika Moves</title>
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63087888/87461299-8582b900-c60e-11ea-82ff-7a27a51859d0.png"
          sizes="any"
        />
      </Head>
      <Script src="https://unpkg.com/primereact/core/core.min.js"></Script>
      <Script src="https://unpkg.com/primereact/sidebar/sidebar.min.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;