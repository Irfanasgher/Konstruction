import Head from "next/head";
import Concerete_Slabs from "../Screens/Concerete_Slabs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Concerete Concerete_Slabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Concerete_Slabs />
    </div>
  );
}
