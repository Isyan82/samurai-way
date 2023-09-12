import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = ({data}) => {
  const {nav} = data
  const navItems = nav.map(item => <div key={item.id} className="nav__item"><NavLink to={item.path}>{item.title}</NavLink></div>)
    return (
      <nav className='nav'>
        {navItems}
      </nav>
    )
}

export default Navbar