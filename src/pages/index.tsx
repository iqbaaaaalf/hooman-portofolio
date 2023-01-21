import Head from 'next/head'
import "@fontsource/gaegu/korean-700.css";

import styles from '../styles/Home.module.css'
import {SolanaAccountService} from "@/modules/SolanaAccount/SolanaAccount.service";
import {InferGetStaticPropsType} from "next";

const publicSolanaAddress = "8CA49qLtDQsqdm9JriSEU5wzQqqYgk7FSyh2xT7nKR6r"

const getBalance: (publicSolanaAddress: string) => Promise<{ props: { balance: number } }> = async (publicSolanaAddress: string) => {
    const solanaAccountService = new SolanaAccountService();
    const balance = await solanaAccountService.getBalance(publicSolanaAddress);

    console.log(balance)

    return {
        props: {
            balance: 5
        }
    }
}

const Home = ({ balance = 7 }:  InferGetStaticPropsType<typeof getBalance>) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hooman Portfolio</title>
                <meta name="description" content="send an email for offer :)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hooman
                </h1>
                <h1 className={styles.subtitle}>
                    public address : {publicSolanaAddress}
                </h1>
                <h1 className={styles.email}>
                    Balance {balance} Sol
                </h1>
            </main>
        </div>
    )
}


export default Home;
