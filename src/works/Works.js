import React from "react";
import s from "./Works.module.scss"
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todolist.png';
import socialImage from './../assets/image/socialNetwork.jpg';

export const Works = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={s.container}>
            <div className={s.worksBlock}>
                <Title text={"My projects"}/>

                <div className={s.works}>
                    <Work
                        style={todolist}
                        name={"Todolist"}
                        description={"some description of the project № 1"}
                        link={""} // ссылка на проект
                        img={""} //ссылка на картинку

                    />
                    <Work
                        style={social}
                        name={"Social Network"}
                        description={"some description of the project № 2"}
                        link={""}

                    />

                </div>
            </div>

        </div>
    )
}


