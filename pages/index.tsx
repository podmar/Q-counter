import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Form from './components/form'
import RemainingEntries from './components/RemainingEntries'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Q-counter</title>
        <meta name="description" content="Counter for your Q entries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <RemainingEntries/>
        <Form />
      </main>
    </>
  )
}
