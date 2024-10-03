import "@/styles/globals.css";
import {Roboto} from 'next/font/google';
import Head from "next/head";
const roboto = Roboto({subsets: ['latin'], weight: ['400', '500','700']});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
      </Head>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
