// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import "@mono/common/styles/common.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
