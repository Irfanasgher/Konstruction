import Head from "next/head";
import Attic_Insulation from "../Screens/Attic_Insulation";
import styles from "../styles/Home.module.css";

export default function AtticInsulation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Attic Insulation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Attic_Insulation />
    </div>
  );
}
