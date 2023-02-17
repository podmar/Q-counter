import React from 'react'

function NoActiveCard () {
    //add user as a prop
    //add a new component: button with api call to create a new card

    return (
      <>
        {/* <h1>{`Hi ${user.userName}!`}</h1>   */}
        <h1>Hi Marta!</h1>
        <h3>You have no entries available.</h3>
        <p>Would you like to add a new card?</p>
        <button>Create a new card</button>
      </>
  )
}

export default NoActiveCard