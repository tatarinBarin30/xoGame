import React from "react";

export const MyButton = (props) =>{
    return(
        <div className="mainMyButton">
            <button onClick={props.act}>
                {props.title}
            </button>
        </div>
    )

}