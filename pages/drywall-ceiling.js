import Head from "next/head";
import Drywall_Ceiling from "../Screens/Drywall_Ceiling";
import styles from "../styles/Home.module.css";

export default function DrywallCeiling() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drywall Ceiling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drywall_Ceiling />
    </div>
  );
}
