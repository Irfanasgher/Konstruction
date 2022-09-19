import Head from "next/head";
import Batt_Insulation from "../Screens/Batt_Insulation";
import styles from "../styles/Home.module.css";

export default function BattInsulation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Batt Insulation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Batt_Insulation />
    </div>
  );
}
