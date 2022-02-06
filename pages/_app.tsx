import { Header } from "@partials";
import "@styles/global.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <a href="#skip-to-content">Skip to Content</a>
      <Header />
      <main id="skip-to-content">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
