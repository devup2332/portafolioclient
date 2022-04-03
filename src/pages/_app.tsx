import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import GlobalContextProvider from "../providers/GlobalProviders";
import store from "../redux/store";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </Provider>
  );
}

export default MyApp;
