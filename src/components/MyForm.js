import React, {useState} from "react";
import '../style/MyForm.css';
import {MyInput} from "./MyInput";
import {MyButton} from "./MyButton";

export const MyForm = ({setIsGame}) => {
    const [valFromInput, setValFromInput] = useState("")
    const [showError, setShowError] = useState(false)
    const request = () => {
        fetch("http://alwertus.zapto.org:9011/heyfilin/youcool",
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({anal: valFromInput})
            })
            .then(rs => {
                if (rs) setIsGame(true)
            })
    }
    const submitButton = () => {
        if (valFromInput === "") {
            setShowError(true)
        } else {
            request()
        }
    }
    const inputVal = (val) => {
        setValFromInput(val)
    }
    return (
        <div className="mainMyForm">
            <MyInput inputVal={inputVal} placeholder="Input Your Name"/>
            {showError && <p style={{
                color: "#D33C3C",
                fontSize: "18px",
                backgroundColor: "#CE9E50",
                border: "1px solid #D33C3C",
                borderRadius: "8px",
                padding: "4px"
            }}><strong>Input Name!</strong></p>}
            <MyButton title="Go" act={submitButton}/>
        </div>
    )
}