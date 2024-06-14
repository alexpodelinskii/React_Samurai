import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const Dialog = (props) => {

    let path = '/Dialogs/' + props.id;

    return <div className={style.Item}>
        <NavLink to={path} className={({ isActive }) => (isActive ? style.activeLink : "")}>{props.name}</NavLink>
    </div>;
}


export default Dialog;