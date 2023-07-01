import { useState } from "react";
import { BracketModular } from "../Bracket/BracketModular";
import { ListModular } from "../List/ListModular";
import "./Components.css";

export function Modular() {
    const [modtype, setModtype] = useState("nullbg");

    const radioChange = (e) => {
        setModtype(e.target.value);
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
                    <input type="radio" value="nullbg" checked={modtype === "nullbg"} onChange={radioChange} />BLANK (default)
                </div>
                <div>
                    <input type="radio" value="whitebg" checked={modtype === "whitebg"} onChange={radioChange} />Plain White
                </div>
                <div>
                    <input type="radio" value="bracket" checked={modtype === "bracket"} onChange={radioChange} />Bracket Reveal
                </div>
                <div>
                    <input type="radio" value="list" checked={modtype === "list"} onChange={radioChange} />List Reveal
                </div>
            </div>
        )
    }

    function ModType() {
        if (modtype === "whitebg") {
            return (<div id="whitebg" />)
        } else if (modtype === "bracket") {
            return (<BracketModular />)
        } else if (modtype === "list") {
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
