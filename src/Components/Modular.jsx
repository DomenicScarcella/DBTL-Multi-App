import { useState } from "react";
import { BracketModular } from "../Bracket/BracketModular";
import { ListModular } from "../List/ListModular";
import "./Components.css";

export function Modular() {
    const [modType, setModType] = useState("nullbg");

    const modTypeChange = (e) => {
        setModType(e.target.value);
    }

    function ModMenu() {
        return (
            <div className="modular-selector">
                <div style={{ textAlign: "center" }}>
                    Select a<br />
                    Modular<br />
                    Component:
                </div>
                <div>
                    <input type="radio" value="nullbg" checked={modType === "nullbg"} onChange={modTypeChange} />BLANK (default)
                </div>
                <div>
                    <input type="radio" value="whitebg" checked={modType === "whitebg"} onChange={modTypeChange} />Plain White
                </div>
                <div>
                    <input type="radio" value="bracket" checked={modType === "bracket"} onChange={modTypeChange} />Bracket Reveal
                </div>
                <div>
                    <input type="radio" value="list" checked={modType === "list"} onChange={modTypeChange} />List Reveal
                </div>
            </div>
        )
    }

    function ModType() {
        if (modType === "whitebg") {
            return (<div id="whitebg" />)
        } else if (modType === "bracket") {
            return (<BracketModular />)
        } else if (modType === "list") {
            return (<ListModular />)
        } else {
            return (<div id="nullbg" />)
        }
    }

    return (
        <div className="modular">
            { ModMenu() }
            { ModType() }
        </div>
    )
}
