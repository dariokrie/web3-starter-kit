import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import { TestToken } from "contracts";
import { ContractGUI } from "../components/ContractGUI/ContractGUI";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contracts GUI</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <ContractGUI
          contractAbis={{
            TestToken,
          }}
        />
      </main>
    </div>
  );
};

export default Home;
