import Head from "next/head";
import Contact_Us from "./../Screens/Contact_Us";
import styles from "../styles/Home.module.css";

export default function ContactUS() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact_Us />
    </div>
  );
}
