import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.Menu}>
            <div className={style.item}>

                <NavLink to="/Profile" className={({ isActive }) => (isActive ? style.activeLink : "")}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Dialogs" className={({ isActive }) => (isActive ? style.activeLink : "")}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News" className={({ isActive }) => (isActive ? style.activeLink : "")}>News</NavLink>
            </div>
            <div className={style.item} >
                <NavLink to="/Music" className={({ isActive }) => (isActive ? style.activeLink : "")}>Music</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;