import Head from "next/head";
import Concerete_Footings from "./../Screens/Concerete_Footings";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Concerete Footings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Concerete_Footings />
    </div>
  );
}
