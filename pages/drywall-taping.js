import Head from "next/head";
import Drywall_Taping from "../Screens/Drywall_Taping";
import styles from "../styles/Home.module.css";

export default function DrywallTaping() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drywall Taping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drywall_Taping />
    </div>
  );
}
