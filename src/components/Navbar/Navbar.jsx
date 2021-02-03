import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.menu}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.active}> Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md'>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md'>Music</NavLink>
            </div>
        </nav>)
}

export default Navbar;