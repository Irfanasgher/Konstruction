import Head from "next/head";
import Fire_Rated_Drywall from "../Screens/Fire_Rated_Drywall";
import styles from "../styles/Home.module.css";

export default function FireRatedDrywall() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fire Rated Drywall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fire_Rated_Drywall />
    </div>
  );
}
