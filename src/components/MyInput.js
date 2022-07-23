import React from "react";
import '../style/MyInput.css'


export const MyInput = (props) => {

    const valGet = (e) => {
        props.inputVal(e.target.value)
    }
    return (
        <div>
            <input placeholder={props.placeholder} className="mainMyInput" onChange={valGet}/>
        </div>
    )
}