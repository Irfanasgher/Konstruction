import Head from "next/head";
import Blown_In_Insulation from "../Screens/Blown_In_Insulation";
import styles from "../styles/Home.module.css";

export default function BlownInInsulation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blown In Insulation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blown_In_Insulation />
    </div>
  );
}
