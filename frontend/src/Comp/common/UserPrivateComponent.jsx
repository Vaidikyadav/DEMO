import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'

function UserPrivateComponent() {
    const auth =localStorage.getItem('user')
    return auth ? <Outlet/> : <Navigate to='/user/login'/>
  
}

export default UserPrivateComponent