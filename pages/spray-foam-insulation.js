import Head from "next/head";
import Spray_Foam_Insulation from "../Screens/Spray_Foam_Insulation";
import styles from "../styles/Home.module.css";

export default function SprayFoamInsulation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spray Foam Insulation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Spray_Foam_Insulation />
    </div>
  );
}
