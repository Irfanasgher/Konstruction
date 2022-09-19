import Head from "next/head";
import ExcavationServices from "../Screens/ExcavationServices";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Excavation Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ExcavationServices />
    </div>
  );
}
