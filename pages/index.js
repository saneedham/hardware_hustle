import Head from "next/head";
import Page from "components/page";
import RollGrid from "components/roll-grid";
import Rules from "components/rules";
import TurnGrid from "components/turn-grid";

import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hardware Hustle</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className}`}>
        <Page split>
          <Rules />
          <TurnGrid count={9} />
        </Page>
        <Page>
          <RollGrid columns={35} rows={25} />
        </Page>
      </main>
    </>
  );
}
