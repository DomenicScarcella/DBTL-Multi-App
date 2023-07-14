import { useState } from "react";
import "./Components.css";

export function Header() {
    const [twoLines, setTwoLines] = useState(true)
    const dbtl = "Don't Bury The Lead";
    const [index, setIndex] = useState(1);
    const headTypes = ["\xa0\xa0\xa0\xa0\xa0\xa0", "RECAP", "OPENING BELL", "THE LEAD", "THE FOLLOW", "THUMB DRIVE", "CHEAP HEAT", "ITALIAN GOODBYE", "PREVIEW", "SPECIAL", "WATCH PARTY"];
    const len = headTypes.length;
  
    const handlePrev = () => {
      setIndex(index == 0 ? len - 1 : index - 1);
    };
  
    const handleNext = () => {
      setIndex(index == len - 1 ? 0 : index + 1);
    };

    return (
        <div className="header">
            <h1 className="carousel">
                <button className="carouselButton" onClick={handlePrev}>
                    <br />{index <= 0 ? headTypes[len - 1] : headTypes[index - 1]}<br /><br /> {`<<<`} 
                </button>
                <span onClick={ () => { setTwoLines(!twoLines) }}>
                    {
                        twoLines
                        ? <>{dbtl}<br /><span id="goldText">{headTypes[index]}</span></>
                        : <>{dbtl} - <span id="goldText">{headTypes[index]}</span></>
                    }
                </span>

                <button  className="carouselButton" onClick={handleNext}>
                    <br />{index >= len - 1 ? headTypes[0] : headTypes[index + 1]}<br /><br /> {`>>>`}
                </button>
            </h1>
        </div>
    )
}
