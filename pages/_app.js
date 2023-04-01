import { Public_Sans } from "next/font/google";
import "@/styles/globals.css";
import Layout from "../components/layout";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-publicSans",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${publicSans.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
