import Head from "next/head";
import Demolition from "./../Screens/Demolition";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demolition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Demolition />
    </div>
  );
}
