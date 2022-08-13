import React from "react";
import pct1 from "../images/Unit1.png"
import pct2 from "../images/Unit2.png"
import pct3 from "../images/Unit3.png"
import pct4 from "../images/Unit4.png"
import pct5 from "../images/Unit5.png"
import pct6 from "../images/Unit6.png"
import '../style/Unit.css'

export const Unit = (props) => {
    const showImage = () => {
        let image = props.image
        if (image === "1") {
            return (
                <img
                    src = {pct1}
                    draggable="true"
                    width = "127px"
                    height = "110px"
                    alt="cha"
                />
            )
        } else if (image === "2") {
            return (
                <img
                    src={pct2}
                    draggable="true"
                    width = "127px"
                    height = "110px"
                    alt="cha"
                />
            )
        } else if (image === "3") {
            return (
                <img
                    src={pct3}
                    draggable="true"
                    width = "127px"
                    height = "110px"
                    alt="cha"
                />
            )
        } else if (image === "4") {
            return (
                <img
                    src={pct4}
                    draggable="true"
                    width = "127px"
                    height = "110px"
                    alt="cha"
                />
            )
        } else if (image === "5") {
            return (
                <img
                    src={pct5}
                    draggable="true"
                    width = "127px"
                    height = "110px"
                    alt="cha"
                />
            )
        } else if (image === "6") {
            return (
                <img
                    src={pct6}
                    draggable="true"
                    width = "127px"
                    height = "110px"
                    alt="cha"
                />
            )
        }
    }
    return (
        <div  className={"commonUnit unitMain" + props.team} >
            {showImage()}
        </div>
    )
}