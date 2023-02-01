import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Form from './components/Form'
import RemainingEntries from './components/RemainingEntries'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [entries, setEntries] = useState(0)

  return (
    <>
      <Head>
        <title>Q-counter</title>
        <meta name="description" content="Counter for your Q entries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <RemainingEntries entries={entries} setEntries={ setEntries } />
        </div>
        <div className={styles.main}>
        <Form setEntries={ setEntries } />
        </div>
      </main>
    </>
  )
}
