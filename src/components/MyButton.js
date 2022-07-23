import React from "react";
import '../style/MyButton.css'

export const MyButton = (props) =>{
    return(
        <div>
            <button className="mainMyButton"
                    onClick={props.act}>
                {props.title}
            </button>
        </div>
    )

}