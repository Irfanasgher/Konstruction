import Head from "next/head";
import Basement_Insulation from "../Screens/Basement_Insulation";
import styles from "../styles/Home.module.css";

export default function BasementInsulation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basement Insulation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Basement_Insulation />
    </div>
  );
}
