import React from 'react'
import "/public/css/SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/prducts">Productos</a></li>
        <li><a href="/users">Usuarios</a></li>
      </ul>
    </div>
  )
}

export default SideBar