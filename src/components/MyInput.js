import React from "react";


export const MyInput = ({inputVal}) =>{

    const valGet = (e) =>{
        inputVal(e.target.value)
    }
    return(
        <div className="mainMyInput">
            <input onChange={valGet}/>
        </div>
    )
}