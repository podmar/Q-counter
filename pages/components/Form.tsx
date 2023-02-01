import React, { useState } from 'react'

function Form({setEntries}: FormProps) {
    const today = new Date().toLocaleString('en-CA')

    const [entryDate, setEntryDate] = useState(today)
  const [entriesToDeduct, setEntriesToDeduct] = useState("1")

  const requestOptions: RequestInit = {
    method: "POST",
    body: JSON.stringify({
      number: entriesToDeduct,
      date: entryDate
    })

  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(requestOptions)
        const response = await fetch("http://localhost:3000/api/entry/", requestOptions)
        const data = await response.json()
        setEntries(data.remaining_entries)
        console.log(data.message)
    }

  return (
      <>
        <form onSubmit={(e) => submitForm(e)} method="post">
            <div>
              <label htmlFor="number">Number of enries to deduct</label>
              <input onChange={(e) => setEntriesToDeduct(e.target.value)} type="number" id="number" name="number" defaultValue={entriesToDeduct}/>
            </div>
            <div>
              <label htmlFor="date">Date of entry:</label>
              <input onChange={(e) => setEntryDate(e.target.value)} type="date" id="date" name="date" defaultValue={entryDate}/>
            </div>

          <button type="submit">Submit</button>
        </form>

    </>
  )
}

export default Form