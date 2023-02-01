import React from 'react'

function Form() {
  return (
      <>
        <form action="/pages/api/entry.ts" method="post">
            <div>
              <label htmlFor="number">Number of enries to deduct</label>
              <input type="text" id="number" name="number" defaultValue={1}/>
            </div>
            <div>
              <label htmlFor="date">Date of entry:</label>
              <input type="date" id="date" name="date" defaultValue={new Date().toLocaleDateString()}/>
            </div>

          <button type="submit">Submit</button>
        </form>

    </>
  )
}

export default Form