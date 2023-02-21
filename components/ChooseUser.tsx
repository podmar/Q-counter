import React, { useEffect, useState } from 'react'
import AddUser from './AddUser'
import styles from '@/styles/Home.module.css'

// TODO
// [x] get all users from users route
// [ ] display all users in a dropdown menu (new component)
// [ ] event choosing a user and linking to entries screen
// [x] add a user component


function ChooseUser({ setUser }: ChooseUserProps) {
    const [users, setUsers] = useState([])

    const requestOptions = {
        method: "GET",
    }

    const getUsers = async () => {
        const response = await fetch("http://localhost:3000/api/users/", requestOptions)
        const data = await response.json()
        setUsers(data.results)
        console.log(data.success, users)
    }

    useEffect(() => {
      getUsers()
    }, [])

  return (
      <>
        <div className={styles.container}>
            <h2>q-counter</h2>
            <h4>Choose a user</h4>
        </div>
            <AddUser setUser={setUser} />
        </>  )
}

export default ChooseUser