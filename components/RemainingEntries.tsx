import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'

function RemainingEntries({entries, setEntries}: EntryProps) {

    const fetchEntries = async () => {
        const responce = await fetch("/api/entries/")
        const currentEntries = await responce.json()
        setEntries(currentEntries.results)
    }

    useEffect(() => {
        fetchEntries()
    }, [])

  return (
    <div className={styles.container}>
        <h3>Remaining entries</h3>
        <h1>{ entries }</h1>
    </div>
  )
}

export default RemainingEntries