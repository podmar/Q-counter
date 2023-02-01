import React, { useEffect } from 'react'

function RemainingEntries({entries, setEntries}: EntryProps) {

    const fetchEntries = async () => {
        const responce = await fetch("http://localhost:3000/api/entry/")
        const currentEntries = await responce.json()
        setEntries(currentEntries.remaining_entries)
    }

    useEffect(() => {
        fetchEntries()
    }, [])

  return (
      <div>
          <h3>Remaining entries</h3>
          <h1>{ entries }</h1>
    </div>
  )
}

export default RemainingEntries