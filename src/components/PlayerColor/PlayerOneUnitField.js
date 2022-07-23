import React from "react";
import '../../style/PlayerOneUnitField.css'
import {Unit} from "../Unit";

export const PlayerOneUnitField = () => {

    return (
        <div>
            <Unit/>
            <table className="mainPlayerOneUnitField">
                <tr>
                    <td><Unit /></td>
                    <td><Unit /></td>
                    <td><Unit/></td>
                    <td><Unit /></td>
                    <td><Unit /></td>
                    <td><Unit /></td>
                </tr>
            </table>
        </div>
    )
}