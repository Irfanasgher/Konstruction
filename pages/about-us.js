import Head from "next/head";
import About_Us from "./../Screens/About_Us";
import styles from "../styles/Home.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About_Us />
    </div>
  );
}
