import { LanguageProvider } from "@/contexts/Language.context";
import { MainSectionProvider } from "@/contexts/MainSection.context";
import "modern-css-reset";
import type { AppProps } from "next/app";
import "@/styles/zIndex.scss";
import "@/styles/helper.scss";
import "@/styles/global.scss";
import "@/styles/mixin.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <MainSectionProvider>
        <Head>
          <title>Daichi Kato&apos;s Portfolio</title>
        </Head>
        <Component {...pageProps} />
      </MainSectionProvider>
    </LanguageProvider>
  );
}
