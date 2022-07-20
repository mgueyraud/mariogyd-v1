import { Footer, Header } from "@partials";
import "@styles/global.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@helpers/g_analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <a href="#skip-to-content">Skip to Content</a>
      <Header />
      <main id="skip-to-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
