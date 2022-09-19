import Head from "next/head";
import Basement_Framing from "./../Screens/Basement_Framing";
import styles from "../styles/Home.module.css";

export default function BasementFraming() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basement Framing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Basement_Framing />
    </div>
  );
}
