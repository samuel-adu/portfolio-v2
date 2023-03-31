import { Public_Sans, Ibarra_Real_Nova } from "next/font/google";
import "@/styles/globals.css";
import Layout from "../components/layout";

const public_Sans = Public_Sans({
  subsets: ["latin"],
  variable: "--ff-primary",
});

const ibarra_Real_Nova = Ibarra_Real_Nova({
  subsets: ["latin"],
  variable: "--ff-secondary",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${public_Sans.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
