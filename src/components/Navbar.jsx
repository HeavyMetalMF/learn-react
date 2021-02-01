import React from "react";
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={c.menu}>
            <div>
                <a className={`${c.item} ${c.active}`} href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md'> Profile</a>
            </div>
            <div>
                <a className={c.item} href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md'>Messages</a>
            </div>
            <div>
                <a className={c.item} href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md'>News</a>
            </div>
            <div>
                <a className={c.item} href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md'>Music</a>
            </div>
         </nav>)
}

export default Navbar;