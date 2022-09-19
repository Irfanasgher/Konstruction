import Head from "next/head";
import Backup_Framing from "./../Screens/Backup_Framing";
import styles from "../styles/Home.module.css";

export default function BackupFraming() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Backup Framing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Backup_Framing />
    </div>
  );
}
