import Header from "./components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
