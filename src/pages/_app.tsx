import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import GlobalContextProvider from "../providers/GlobalProviders";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
