import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
     return  <header className={classes.header}>
        <img src="https://www.logologo.com/logos/abstract-mollusk-sea-shell-free-logo.jpg" alt="Company Logo" />

        <div className={s.loginBlock}>
                { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
                
        </div>
        </header>
}

export default Header;