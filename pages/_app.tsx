import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component.name);
  return (
    <Layout useGMap={pageProps.useGMap}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
