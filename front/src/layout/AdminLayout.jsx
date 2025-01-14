import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function AdminLayout() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminLayout
