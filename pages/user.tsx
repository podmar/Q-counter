import NoActiveCard from '@/components/NoActiveCard'
import Head from 'next/head'
import React from 'react'

function user() {
    //if no active card, display the noactive card component
    //otherwise display active card with recorded entries
  return (
      <>
        <Head>
            <title>Q-counter</title>
            <meta name="description" content="Counter for your Q entries" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        {/* <h1>{`Hi ${user.userName}!`}</h1>   */}
          <h1>Hi Marta!</h1>
              <NoActiveCard />
        </main>
      </>
  )
}

export default user