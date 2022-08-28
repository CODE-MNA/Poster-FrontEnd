import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/authContext';
import {Outlet,Navigate} from 'react-router-dom'

export const PrivateRoute = (props)=> {

    const {loggedIn} = useAuth()

    if (loggedIn) return <Outlet></Outlet>
    if(!loggedIn) return <Navigate to="/"></Navigate>
}