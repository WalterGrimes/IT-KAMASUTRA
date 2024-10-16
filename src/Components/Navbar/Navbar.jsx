import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? s.activeLink : ''}>Profile</NavLink>     
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className={({ isActive }) => isActive ? s.activeLink : ''}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a href="#news">News</a>
      </div>
      <div className={s.item}>
        <a href="#music">Music</a>
      </div>
      <div className={s.item}>
        <a href="#settings">Settings</a>
      </div>
      <div className={s.item} style={{ position: 'relative' }}>
        <NavLink to='/friends' className={({ isActive }) => isActive ? s.activeLink : ''}>
          Friends
          <span className={s.notificationBadge}></span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
