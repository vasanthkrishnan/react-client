import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const WebLayout = () => {
  return (
    <>
        < Navbar />
        < Outlet />
    </>
  )
}

export default WebLayout
