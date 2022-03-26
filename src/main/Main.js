import style from "../main/Main.module.css";
import Nav from "../nav/Nav";
import React from "react";
import styleContainer from "../../src/common/styles/Container.module.css"


const Main = () => {
    return(
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Roman Tikhonov</h1>
                    <p>Front-end Developer.</p>

                </div>
                <div className={style.photo}>

                </div>

            </div>


        </div>

    )
}


export default Main