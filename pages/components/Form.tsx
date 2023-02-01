import React from 'react'

function Form({setEntries}: FormProps) {
    const today = new Date().toLocaleString('en-CA')

    const submitForm = async () => {

        const response = await fetch("http://localhost:3000/api/entry/", {
            method: "post",
        })
        const data = await response.json()
        setEntries(data.remaining_entries)
        console.log(data.message)
    }

  return (
      <>
        <form action="http://localhost:3000/api/entry/" method="post">
            <div>
              <label htmlFor="number">Number of enries to deduct</label>
              <input type="text" id="number" name="number" defaultValue={1}/>
            </div>
            <div>
              <label htmlFor="date">Date of entry:</label>
              <input type="date" id="date" name="date" defaultValue={today}/>
            </div>

          <button type="submit">Submit</button>
        </form>

    </>
  )
}

export default Form