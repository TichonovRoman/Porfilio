import style from "./Main.module.scss";
import Nav from "../nav/Nav";
import React from "react";
import styleContainer from "../../src/common/styles/Container.module.css"
import myPhoto from "../assets/image/My Fhoto.jpg"


const Main = () => {
    return(
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am</h1>
                    <h1>Roman Tikhonov</h1>
                    <p>Front-end Developer.</p>

                </div>
                <img className={style.photo} alt={"My Photo"} src={myPhoto}/>
                {/*<span className={style.photo}>*/}

                {/*</span>*/}

            </div>


        </div>

    )
}


export default Main