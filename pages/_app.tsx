import type { AppProps } from "next/app";
import "../styles/antd.less";
import "../styles/main.less";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
