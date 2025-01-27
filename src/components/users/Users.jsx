import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Users() {

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`)
        setUsers(data.users)
    }

    useEffect(() => {
        getUsers();
    }, [users])

    const deleteUser = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`)
    }
    return (
        <>
        <Link className="btn btn-primary" to={'/create'}>Create</Link>

        <section className='users d-flex gap-4 flex-wrap'>
            {users.map(user =>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title"> Name: {user.userName}</h5>
                        <p className="card-text"> Email: {user.email}</p>
                        <button onClick={()=>deleteUser(user._id)} className="btn btn-danger">Delete</button>
                        <Link className='btn btn-secondary' to={`/users/${user._id}`}>Details</Link>
                    </div>
                </div>
            )}
            </section>

        </>
    )
}
