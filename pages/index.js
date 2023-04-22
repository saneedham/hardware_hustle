import Head from "next/head";
import Image from "next/image";
import Turn from "components/turn";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {[...Array(12)].map((e, i) => (
          <Turn key={i} id={i + 1} />
        ))}
      </main>
    </>
  );
}
