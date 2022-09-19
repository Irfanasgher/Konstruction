import Head from "next/head";
import Footings_Framing from "../Screens/Footings_Framing";
import styles from "../styles/Home.module.css";

export default function FootingsFraming() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Footings Framing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Footings_Framing />
    </div>
  );
}
