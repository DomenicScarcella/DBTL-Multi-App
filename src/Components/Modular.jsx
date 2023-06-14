import { useState } from "react";
import { BracketModular } from "../Bracket/BracketModular";
import { ListModular } from "../List/ListModular";
import "./Components.css";

export function Modular() {
    const [modtype, setModtype] = useState("nullbg");

    const radioChange = (e) => {
        setModtype(e.target.value);
    }

    return (
        <div className="modular">
            <div className="modular-selector">
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
            {
                (modtype === "whitebg")
                    ? <div id="whitebg" />
                    : (modtype === "bracket")
                        ? <BracketModular />
                        : (modtype === "list")
                            ? <ListModular />
                            : <div id="nullbg" />
            }
        </div>
    )
}
