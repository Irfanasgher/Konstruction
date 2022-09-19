import Head from "next/head";
import Home_Renovation from "../Screens/Home_Renovation";
import styles from "../styles/Home.module.css";

export default function HomeRenovation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Addition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home_Renovation />
    </div>
  );
}
