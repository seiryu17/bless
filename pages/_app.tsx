import type { AppProps } from "next/app";
import "../src/styles/antd.less";
import "../src/styles/main.less";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
