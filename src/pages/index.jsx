import Head from "next/head";

import Header from "@/src/components/Header";
import PopulationGraphByPrefecture from "@/src/components/PopulationGraphByPrefecture";

export default function Home() {
  return (
    <>
      <Head>
        <title>都道府県ごとの人口構成</title>
      </Head>
      <Header />
      <PopulationGraphByPrefecture />
    </>
  );
}
