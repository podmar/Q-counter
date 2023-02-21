import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'

function Form({setEntries}: FormProps) {
  const today = new Date().toLocaleString('en-CA').slice(0, 10)

  const [entryDate, setEntryDate] = useState(today)
  const [entriesToDeduct, setEntriesToDeduct] = useState("1")

  const requestOptions: RequestInit = {
    method: "POST",
    headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
            }),
    body: JSON.stringify({
        date: entryDate,
        // TODO: add card Id
        // card:
    })

  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(requestOptions)
        const response = await fetch("/api/entries/", requestOptions)
        const data = await response.json()
        // setEntries(data.remaining_entries)
        console.log(data.message)
    }

  return (
        <form onSubmit={submitForm} className={styles.form}>
            <div className={styles.input}>
              <label htmlFor="number">Number of enries to deduct</label>
        <input onChange={(e) => setEntriesToDeduct(e.target.value)} value={entriesToDeduct} type="number" id="number" name="number" required/>

            </div>
            <div className={styles.input}>
              <label htmlFor="date">Date of entry</label>
              <input onChange={(e) => setEntryDate(e.target.value)} value={entryDate} type="date" id="date" name="date"/>
            </div>

          <button type="submit">Silk away</button>
        </form>
  )
}

export default Form