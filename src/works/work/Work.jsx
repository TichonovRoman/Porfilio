import React from "react";
import style from "./Work.module.css"

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.iconBlock}>
                <img src={props.img} alt={"My project page"} className={style.icon}>

                </img>

                <a href={props.link}  className={style.link}>View</a>
            </div>

            <div className={style.description}>

                <h3 className={style.name}>{props.name}</h3>
                <span className={style.shortDescription}>{props.description}</span>

            </div>

        </div>
    )

}