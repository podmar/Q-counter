import React from 'react'
import { Types } from 'mongoose';


interface AddCardProps {
    userId: Types.ObjectId,
    setUser: SetUser
}

//TODO
//[ ] create a card state variable on home page and pass it down in props here
//[ ] define a user type that is being returned from the backend every time

function AddCard({ userId, setUser }: AddCardProps) {

    const requestOptions: RequestInit = {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
                    }),
            body: JSON.stringify({
                user: userId
            })
    }

        const createCard = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("creating new card")
        console.log(requestOptions)

        const response = await fetch("/api/cards/", requestOptions)

        const data = await response.json()
        // setUser(data.user) // TODO user is not coming from the API now, change model to reduce operations?

        console.log(data)
    }

  return (
    <button onClick={createCard}>Add a Card</button>
  )
}

export default AddCard