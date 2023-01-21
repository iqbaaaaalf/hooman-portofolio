import Head from 'next/head'
import "@fontsource/gaegu/korean-700.css";

import styles from '../styles/Home.module.css'

const contactEmail = "ingin@menikah.app"

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>yuk@menikah.app</title>
          <meta name="description" content="send an email for offer :)" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            mau beli domain ini ?
          </h1>
          <h1 className={styles.subtitle}>
            hubungi ...
          </h1>
          <h1 className={styles.email}>
            {contactEmail}
          </h1>
        </main>
      </div>
  )
}
