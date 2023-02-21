import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'

// TODO
// [ ] pass the new user to Choose user component

function AddUser({ setUser }: ChooseUserProps) {
    const [userName, setUserName] = useState("")

    const requestOptions: RequestInit = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
                }),
        body: JSON.stringify({
            userName: userName
        })
    }

    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("creating user")
        console.log(requestOptions)

        const response = await fetch("/api/users/", requestOptions)

        const data = await response.json()
        // setUser(data.results)
        console.log(data)
    }


    return (
        <form onSubmit={createUser} className={styles.form}>
            <div className={styles.input}>
                <label htmlFor="userName">Enter username</label>
                <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" id="userName" name="userName" required/>

            </div>
            <button type="submit">Add a new user</button>
        </form>
    )
}

export default AddUser