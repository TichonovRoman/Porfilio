import React from "react";
import style from "../header/Header.module.css"
import Nav from "../nav/Nav";

const Header =() => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    )
}

export default Header