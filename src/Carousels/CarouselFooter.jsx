import { useState } from "react";
import "./Carousels.css";

export function CarouselFooter() {
    const [oneLine, setOneLine] = useState(true);
    const [edit, setEdit] = useState(false);
    const [inputs, setInputs] = useState({title: "WWE SmackDown", date: "June 9, 2023"});
    const [newInputs, setNewInputs] = useState({...inputs});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        setInputs({...newInputs});
        setEdit(false);
        event.preventDefault();
    }

    const handleCancel = () => {
        setNewInputs({...inputs});
        setEdit(false);
    }

    return (
        <div >
            {
                !edit
                ? <span
                    style={{cursor: "pointer"}}
                    onDoubleClick={ () => { setEdit(true) }}
                    onClick={ () => { setOneLine(!oneLine) }}
                >
                    {
                        oneLine
                        ? <>{inputs.title} - {inputs.date}</>
                        : <>{inputs.title}<br />{inputs.date}</>
                    }
                </span>
                : <form>
                    <label className="footerLabel"> Title:  
                    <input 
                        className="footerInput"
                        type="text"
                        name="title"
                        value={newInputs.title || ""}
                        onChange={handleChange}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleSubmit();
                            } else if (event.key === "Escape") {
                                handleCancel();
                            }
                        }}
                    />
                    </label>
                    <label className="footerLabel"> Date:  
                    <input
                        className="footerInput"
                        type="text"
                        name="date"
                        value={newInputs.date || ""}
                        onChange={handleChange}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleSubmit();
                            } else if (event.key === "Escape") {
                                handleCancel();
                            }
                        }}
                    />
                    </label>
                    <button 
                        className="footerButton"
                        style={{color: "darkblue"}} 
                        type="submit" 
                        onClick={handleSubmit}
                    >
                        SUBMIT
                    </button>
                    <button 
                        className="footerButton" 
                        style={{color: "darkred"}} 
                        type="submit" 
                        onClick={handleCancel}
                    >
                        CANCEL
                    </button>
                </form>
            }
        </div>
    )
}
