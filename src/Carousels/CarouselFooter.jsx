import { useState } from "react";
import "./Carousels.css";

export function CarouselFooter() {
    const [oneLine, setOneLine] = useState(true);
    const [footTitle, setFootTitle] = useState("WWE SmackDown");
    const [footDate, setFootDate] = useState("June 9, 2023");

    function Foot() {
        return (
            oneLine
            ? <>{footTitle} - {footDate}</>
            : <>{footTitle}<br />{footDate}</>
        )
    }

    return (
        <div >
            <span style={{cursor: "pointer"}} onClick={ () => { setOneLine(!oneLine) }}>{Foot()}</span>
        </div>
    )
}
