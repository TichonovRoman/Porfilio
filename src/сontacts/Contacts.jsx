import React from "react";
import s from "./Contacts.module.css"

export const FeedbackForm = () => {
    return (
        <div className={s.container1}>
            <div className={s.block}>
                <div className={s.container2}>
                    <h2 className={s.title}>Contacts</h2>
                    <form className={s.form}>
                        <input/>
                        <input/>
                        <textarea className={s.textarea}/>

                    </form>
                    <button className={s.button}>Send</button>
                </div>


            </div>

        </div>
    )
}


