import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext()
export default function UserProvider({children}) {
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
       <>
       <UserContext.Provider value={{user, setUser}}>
        {children}
       </UserContext.Provider>
       </>
    )
}
