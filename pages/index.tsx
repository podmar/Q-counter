import Head from 'next/head'
import { Inter } from '@next/font/google'
import RemainingEntries from '../components/RemainingEntries'
import ChooseUser from '@/components/ChooseUser'
import { useState } from 'react'
import AddEntry from '../components/AddEntry'

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
          <AddEntry setEntries={setEntries} />
          </>
          :
          <ChooseUser setUser={ setUser } />
        }
      </main>
    </>
  )
}
