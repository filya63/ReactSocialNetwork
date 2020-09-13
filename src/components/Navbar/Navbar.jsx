import React from 'react';
import s from './Navbar.module.css';
import FriendsNav from './FriendsNav/FriendsNav';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <section className={s.navbar}>
            <nav className={s.menu}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </nav>
        <FriendsNav state={props.state.FriendData} />
        </section>
    )
}

export default Navbar;