import { Header } from "@partials";
import "@styles/global.css";
import Image from "next/image";
import behanceLogo from "@assets/img/icons/behance-logo.svg";

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
      <footer className="footer">
        <a
          href="https://www.behance.net/diegocamacho5/moodboards"
          target="_blank"
          rel="noreferrer"
        >
          Designed By Diego Camacho&nbsp;
          <Image src={behanceLogo} alt="Behance Logo" />
        </a>
      </footer>
    </>
  );
}

export default MyApp;
