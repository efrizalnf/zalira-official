import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function About() {

    return (<div className={styles.container}>
        <Head>
            <title>Zalira</title>
            <meta name="description" content="zalira official" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                About
            </h1>


        </main>

       
    </div>)

}