import Head from "next/head";
import Metal_Stud_Framing from "../Screens/Metal_Stud_Framing";
import styles from "../styles/Home.module.css";

export default function MetalStudFraming() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Metal Stud Framing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Metal_Stud_Framing />
    </div>
  );
}
