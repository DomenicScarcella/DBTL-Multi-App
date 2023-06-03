import { useState } from "react";
import "./Carousels.css";

export function CarouselHeader() {
    const [index, setIndex] = useState(0);
    const headTypes = ["RECAP", "PREVIEW", "SPECIAL"];
    const len = headTypes.length;
  
    const handlePrev = () => {
      setIndex(index <= 0 ? len - 1 : index - 1);
    };
  
    const handleNext = () => {
      setIndex(index >= len - 1 ? 0 : index + 1);
    };

    return (
        <div className="carousel">
            <button className="carouselButton" onClick={handlePrev}>
                <br />{index <= 0 ? headTypes[len - 1] : headTypes[index - 1]}<br /><br /> {`<<<`} 
            </button>
            {headTypes[index]}
            <button  className="carouselButton" onClick={handleNext}>
                <br />{index >= len - 1 ? headTypes[0] : headTypes[index + 1]}<br /><br /> {`>>>`}
            </button>
        </div>
    )
}
