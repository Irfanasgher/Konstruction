import Head from "next/head";
import Drywall_Installation from "../Screens/Drywall_Installation";
import styles from "../styles/Home.module.css";

export default function DrywallInstallation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drywall Installation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drywall_Installation />
    </div>
  );
}
