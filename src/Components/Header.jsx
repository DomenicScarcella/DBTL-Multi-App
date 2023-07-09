import { useState } from "react";
import "./Components.css";

export function Header() {
    const [index, setIndex] = useState(1);
    const dbtl = "Don't Bury The Lead";
    const headTypes = ["\xa0\xa0\xa0\xa0\xa0\xa0", "THE LEAD", "THE FOLLOW", "THUMB DRIVE", "CHEAP HEAT", "ITALIAN GOODBYE", "PREVIEW", "SPECIAL", "WATCH PARTY"];
    const len = headTypes.length;
  
    const handlePrev = () => {
      setIndex(index == 0 ? len - 1 : index - 1);
    };
  
    const handleNext = () => {
      setIndex(index == len - 1 ? 0 : index + 1);
    };

    return (
        <div className="header">
            <h1>
                { dbtl }
            </h1>
            <div className="carousel">
                <button className="carouselButton" onClick={handlePrev}>
                    <br />{index <= 0 ? headTypes[len - 1] : headTypes[index - 1]}<br /><br /> {`<<<`} 
                </button>
                <h1 id="goldText">
                    { headTypes[index] }
                </h1>
                <button  className="carouselButton" onClick={handleNext}>
                    <br />{index >= len - 1 ? headTypes[0] : headTypes[index + 1]}<br /><br /> {`>>>`}
                </button>
            </div>
        </div>
    )
}
