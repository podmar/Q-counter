import React, { useEffect, useState } from 'react'
import AddUser from './AddUser'

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
            <h1>Q-counter</h1>
            <h3>Choose a user</h3>
            <AddUser/>
        </>  )
}

export default ChooseUser