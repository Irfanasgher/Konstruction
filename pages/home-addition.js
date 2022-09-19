import Head from "next/head";
import Home_Addition from "../Screens/Home_Addition";
import styles from "../styles/Home.module.css";

export default function HomeAddition() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Addition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home_Addition />
    </div>
  );
}
