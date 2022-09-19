import Head from "next/head";
import Custom_Home_Framing from "../Screens/Custom_Home_Framing";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Home Framing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Custom_Home_Framing />
    </div>
  );
}
