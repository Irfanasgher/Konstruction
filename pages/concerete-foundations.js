import Head from "next/head";
import Concerete_Foundations from "./../Screens/Concerete_Foundations";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Concerete Foundations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Concerete_Foundations />
    </div>
  );
}
