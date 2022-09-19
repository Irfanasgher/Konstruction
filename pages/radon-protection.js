import Head from "next/head";
import Radon_Protection from "../Screens/Radon_Protection";
import styles from "../styles/Home.module.css";

export default function RadonProtection() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Radon Protection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Radon_Protection />
    </div>
  );
}
