import { Public_Sans } from "next/font/google";
import "@/styles/globals.css";
import Layout from "../components/layout";
import { ThemeProvider } from "next-themes";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className={`${publicSans.variable} font-primary`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
