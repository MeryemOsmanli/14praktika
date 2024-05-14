import React from 'react'
import { Link } from 'react-router-dom'

function UserNavbar() {
  return (
    <div>
        <Link to={"/admin"}>Admin</Link>---
    <Link to={"/"}>home</Link>---
      {/* <Link to={"detail"}>detail</Link> */}

    </div>
  )
}

export default UserNavbar
