import React from "react";
import {PlayerUnitField} from "./PlayerUnitField";
import '../style/GamePage.css'


export const GamePage = () => {
    return (
        <div className="mainGamePage">
            <div>
                <PlayerUnitField team = "1"/>
            </div>
            <div className="mainGameField">
                <table  className="gameField">
                    <tr>
                        <td>
                            1x1
                        </td>
                        <td>
                            1x2
                        </td>
                        <td>
                            1x3
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2x1
                        </td>
                        <td>
                            2x2
                        </td>
                        <td>
                            2x3
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3x1
                        </td>
                        <td>
                            3x2
                        </td>
                        <td>
                            3x3
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <PlayerUnitField team = "2"/>
            </div>
        </div>
    )
}