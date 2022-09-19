import Head from "next/head";
import UnderPinning from "../Screens/UnderPinning";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Concerete Footings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UnderPinning />
    </div>
  );
}
