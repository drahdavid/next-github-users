import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div
          className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
        >
          <h1>Hola</h1>
        </div>
      </Layout>
    </>
  );
}
