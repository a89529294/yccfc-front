import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

//TODO refactor context to its own folder
//     maybe come up with a better solution
export const clickContext = createContext<{
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}>({ clicked: false, setClicked: () => {} });

function MyApp({ Component, pageProps }: AppProps) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clicked && setClicked(false);
  }, [clicked]);
  return (
    <clickContext.Provider value={{ clicked, setClicked }}>
      <Layout useGMap={pageProps.useGMap}>
        <Component {...pageProps} />
      </Layout>
    </clickContext.Provider>
  );
}

export default MyApp;
