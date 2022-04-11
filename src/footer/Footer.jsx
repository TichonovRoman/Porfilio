import React from "react";
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={s.container1}>
            <div className={s.block}>
                <div className={s.container2}>
                    <h2 className={s.title}>Tikhonov Roman</h2>
                    <div className={s.links}>
                       <div className={s.link}/>
                       <div className={s.link}/>
                       <div className={s.link}/>
                       <div className={s.link}/>

                    </div>
                    <h2>@2022 All rights reserved</h2>
                </div>


            </div>

        </div>
    )
}


