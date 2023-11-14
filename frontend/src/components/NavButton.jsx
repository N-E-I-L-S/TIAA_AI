import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavButton({text, to="/"}) {
    return (
        <>
            <NavLink to={to} className="rounded-md bg-[#2eade2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#093b60] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {text}
            </NavLink>
        </>
    )
}
