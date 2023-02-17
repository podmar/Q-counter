import Head from 'next/head'
import { Inter } from '@next/font/google'
import Form from '../components/Form'
import RemainingEntries from '../components/RemainingEntries'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState(null)
  const [entries, setEntries] = useState(0)

  return (
    <>
      <Head>
        <title>Q-counter</title>
        <meta name="description" content="Counter for your Q entries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {user ?
          <>
          <RemainingEntries entries={entries} setEntries={ setEntries } />
          <Form setEntries={setEntries} />
          </>
          :
          <>
          <h1>Choose user</h1>
          </>
        }
      </main>
    </>
  )
}
