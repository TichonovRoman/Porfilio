import React from "react";
import style from "./Skills.module.css"
import Nav from "../nav/Nav";
import styleContainer from "../../src/common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

const Skills =() => {
    return (
        <div className={style.skillsBlock}>
            <div className= {style.skillsContainer}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>

                       <Skill title = {"JS"} description = {"The text about the skillThe text about the skillThe text about the skill"}/>
                       <Skill title = {"CSS"} description = {"The text about the skill"}/>
                       <Skill title = {"React"} description = {"The text about the skill"}/>
                       <Skill title = {"Redux"} description = {"The text about the skill"}/>
                       <Skill title = {"Typescript"} description = {"The text about the skill"}/>
                       <Skill title = {"Jest"} description = {"The text about the skill"}/>


                </div>
            </div>

        </div>
    )
}

export default Skills