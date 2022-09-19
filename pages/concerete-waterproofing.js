import Head from "next/head";
import Concerete_WaterProofing from "../Screens/Concerete_WaterProofing";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Concerete WaterProofing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Concerete_WaterProofing />
    </div>
  );
}
