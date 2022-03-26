import React from "react";
import style from "./Skills.module.css"
import Nav from "../nav/Nav";
import styleContainer from "../../src/common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

const Skills =() => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill/>

                </div>
            </div>

        </div>
    )
}

export default Skills