import React from "react";
import '../style/GamePage.css'
import {PlayerOneUnitField} from "./PlayerColor/PlayerOneUnitField";
import {PlayerTwoUnitField} from "./PlayerColor/PlayerTwoUnitField";

export const GamePage = () => {
    return (
        <div className="mainGamePage">
            <div>
                <PlayerOneUnitField/>
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
                <PlayerTwoUnitField/>
            </div>
        </div>
    )
}