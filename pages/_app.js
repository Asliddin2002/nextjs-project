import "../styles/globals.css";
import "../styles/header.css";
import "../styles/sidebar.css";
import "../styles/main.css";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
