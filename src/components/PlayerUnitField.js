import React from "react";
import '../style/PlayerUnitField.css'
import {Unit} from "./Unit";

export const PlayerUnitField = (props) => {

    return (
        <div>
            <table className={"commonStyle mainPlayerUnitField" + props.team}>
                <tr>
                    <td><Unit image = '1' team = {props.team}/></td>
                    <td><Unit image = '2' team = {props.team}/></td>
                    <td><Unit image = '3' team = {props.team}/></td>
                    <td><Unit image = '4' team = {props.team}/></td>
                    <td><Unit image = '5' team = {props.team}/></td>
                    <td><Unit image = '6' team = {props.team}/></td>
                </tr>
            </table>
        </div>
    )
}