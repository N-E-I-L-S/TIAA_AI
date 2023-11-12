import React, { useEffect, useState } from 'react'

export default function AuthContext() {
    const GetUser = async () => {
    const res = await fetch('/auth/user')
    const json = await res.json();
    setUser(json)
    console.log(json)
    }
    useEffect(()=>{
        GetUser()
    },[])

    const [user, setUser] = useState('')

    return (
        <div>{user.name}</div>
    )
}
