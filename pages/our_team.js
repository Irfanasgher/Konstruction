import Head from "next/head";
import OurTeam from "../Screens/Our_Team";
import styles from "../styles/Home.module.css";

export default function Ourteam() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OurTeam />
    </div>
  );
}
