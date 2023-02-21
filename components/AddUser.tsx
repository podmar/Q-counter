import styles from '@/styles/Home.module.css'
import React, { useState } from 'react'


function AddUser() {
    const [userName, setUserName] = useState("")

    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("creating user")
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