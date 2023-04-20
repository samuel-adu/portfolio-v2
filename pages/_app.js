import { Public_Sans, Ibarra_Real_Nova } from "next/font/google";
import "@/styles/globals.css";
import Layout from "../components/layout";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ["latin"],
  variable: "--font-ibarra-real-nova",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${publicSans.variable} ${ibarraRealNova.variable} font-body text-primary-700`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
