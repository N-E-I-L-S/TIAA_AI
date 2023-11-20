import React, { createContext, useEffect, useState, useContext } from 'react'

const UserContext = createContext()
export function UserProvider({children}) {
    
    const [user, setUser] = useState('')
    const GetUser = async () => {
    console.log(1)
    const res = await fetch('/auth/user')
    const json = await res.json();
    if(json.name)
    {
        setUser(json)
    }
    else
    setUser("")
    console.log(json)
    }

    
    async function login({email, password}){
        const body= {
            "email" : email,
            "password" : password
        }
        const url = `/auth/login`
        try{
        const response = await fetch(url, {
        method: 'POST',
          headers: {
           'Content-Type': 'application/json',
         },
          body: JSON.stringify(body),
          });
        if(response.status === 200)
        {
            GetUser()
            console.log('ok')
        }
        else
        console.log('error')
        }
        catch{
            console.log('error')
          }
    }

    async function logout() {
        const url = `/auth/logout`
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.status === 200) {
            console.log('user logged out')
            GetUser()
          }
          else
            console.log('error')
        }
        catch {
          console.log('error')
        }
      }


    useEffect(()=>{
        GetUser()
    },[])

    return (
       <>
       <UserContext.Provider value={{user, setUser, login, logout}}>
        {children}
       </UserContext.Provider>
       </>
    )
}
function UserAuth() {
    return useContext(UserContext)
}


export default UserAuth
