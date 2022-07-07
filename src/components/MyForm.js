import React, {useState} from "react";
import {MyInput} from "./MyInput";
import {MyButton} from "./MyButton";

export const MyForm = ({setIsGame}) =>{
    const [valFromInput, setValFromInput] = useState("")
    const [showError, setShowError] = useState(false)
    const request = () =>{
        fetch("http://alwertus.zapto.org:9011/heyfilin/youcool",
            {method: 'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({anal:valFromInput})
            })
            .then(rs =>{if (rs) setIsGame(true)})
    }
    const submitButton = () =>{
        if(valFromInput === ""){
            setShowError(true)
        }else{
            request()
        }
    }
    const inputVal = (val) =>{
        setValFromInput(val)
    }
    return(
        <div className="mainMyForm">
            <MyInput inputVal={inputVal}/>
            {showError && <p>No Name!</p>}
            <MyButton title="Go" act={submitButton}/>
        </div>
    )
}