import Head from "next/head";
import Garage_Framing from "./../Screens/Garage_Framing";
import styles from "../styles/Home.module.css";

export default function GarageFraming() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Garage Framing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Garage_Framing />
    </div>
  );
}
