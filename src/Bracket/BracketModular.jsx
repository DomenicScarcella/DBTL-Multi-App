import { useState } from "react";
import { Rd1L, Rd1R, Rd2L, Rd2R, Rd3L, Rd3R, champ } from "./dataBracket.js";
import wwelogo from "../art_common/wwelogo.png";
import "./BracketModular.css";

export function BracketModular() {
    const [now, setNow] = useState("WWE logo");
    const [photo, setPhoto] = useState(wwelogo);
    const [prevClick, setPrevClick] = useState("None yet");

    const clearFeaturedWrestler = () => {
        setPhoto(wwelogo); setNow("WWE logo");
    };

    const newFeaturedWrestler = (photo, name) => {
        setPhoto(photo); setNow(name);
    };

    function BracketCol(arr, L_R, round) {
        return (
            <div className={"single-col"}>
                <div
                    className={"col-name " + L_R+round}
                    id={
                        (prevClick.slice(0, 4) == round.slice(0, 4))
                        ? ""
                        : "no-show"
                    }
                >
                    {round}
                </div>
                {
                    arr.map(item => {
                        const i = item.name[0];
                        return (
                            <button
                                key={round + i} 
                                className={"col-item " + L_R + " " + item.see + " " + round+i}
                                onClick={() => {
                                    if (item.see == "hide") {
                                        item.see = "unhide";
                                        if (photo != item.ph) { newFeaturedWrestler(item.ph, item.name) }
                                    } else {
                                        item.see = "hide";
                                        if (photo == item.ph) { clearFeaturedWrestler() }
                                    }
                                    setPrevClick(round + i + "_" + item.see);
                                }}
                                id={
                                    (String(now).valueOf() == String(item.name).valueOf())
                                    && (item.see == "unhide")
                                    ? ((L_R == "L") ? "now-L" : "now-R")
                                    : ""
                                }
                            >
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
        )
    }

    function FeaturedWrestler() {
        return (
            <div className={"featured-wrestler"}>
                <img
                    className={"featured-image " + prevClick} 
                    id={
                        (photo == wwelogo) ? "wwelogo" : "wrestler"
                    }
                    src={photo} 
                    alt={now} 
                    onClick={() => {
                        clearFeaturedWrestler();
                        setPrevClick("photo reset")
                    }}
                />
                <button
                    className={"champ-item C " + champ.see + " C1"}
                    onClick={() => {
                        if (champ.see == "hide") {
                            champ.see = "unhide";
                            if (photo != champ.ph) { newFeaturedWrestler(champ.ph, champ.name) }
                        } else {
                            champ.see = "hide";
                            if (photo == champ.ph) { clearFeaturedWrestler() }
                        }
                        setPrevClick("C1_" + champ.see);
                    }}
                    id={
                        (String(now).valueOf() == String(champ.name).valueOf())
                        && (champ.see == "unhide")
                        ? "now-C" : ""
                    }
                >
                    {champ.name}
                </button>
            </div>
        )
    }

    return (
        <div className="bracket-init">
            <div id={"top-brackets"} />
            <div id={"bottom-brackets"} />
            <div id={"mid-brackets"} />
            <div id={"final-brackets"} />

            { BracketCol(Rd1L, "L", "Openers") }
            { BracketCol(Rd2L, "L", "Semifinals") }
            { BracketCol(Rd3L, "L", "Finals") }

            { FeaturedWrestler() }

            { BracketCol(Rd3R, "R", "Finals") }
            { BracketCol(Rd2R, "R", "Semifinals") }
            { BracketCol(Rd1R, "R", "Openers") }
        </div>
    )
}
