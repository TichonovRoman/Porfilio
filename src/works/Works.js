import React from "react";
import s from "./Works.module.css"
import {Work} from "./work/Work";

export const Works = () => {
    return (
        <div className={s.container}>
            <div className={s.worksBlock}>
                <div  className={s.title}>
                    <h2>My projects</h2>
                </div>

                <div className={s.works}>
                    <Work name = {"Todolist"}
                          description={"some description of the project № 1"}
                          link = {""} // ссылка на проект
                          img = {""} //ссылка на картинку

                    />
                    <Work name = {"Social Network"}
                          description={"some description of the project № 2"}
                          link = {""}

                    />

                </div>
            </div>

        </div>
    )
}


