import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} fetcher={fetcher} />
    </SWRConfig>
  );
}
