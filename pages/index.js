import Head from "next/head";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunnyside Agency</title>
        <meta name="description" content="Sunnyside Agency" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
