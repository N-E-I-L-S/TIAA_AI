import React, { useEffect } from 'react'

export default function Login() {

    async function UserLogin(){
        const body= {
            "name":"neil1",
            "email" : "neil@gmail.com",
            "password" : "12345"
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
        console.log('ok')
        else
        console.log('error')
        }
        catch{
            console.log('error')
          }
    }
    useEffect(()=>{
        UserLogin()
    },[])

    return (
        <>
        
        </>
    )
}
