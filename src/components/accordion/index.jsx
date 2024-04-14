/* eslint-disable no-unused-vars */
//single selection & multi selection
//accordion means hidden content revealed with a click (like a dropdown but the content will be visible once you click on it)

import { useState } from "react"
import data from "./data"
import  "./style.css"
export default function Accordion() {

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const [selected, setSelected] = useState(null)
    console.log(selected);
    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length > 0 ?
                    (data.map((dataItem) => 
                    (<div className="item">
                        <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            
                            <div>
                                {
                                    selected === dataItem.id ?
                                        <div className="content">
                                            {dataItem.answer}
                                        </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>))
                    )
                    :(
                    <div>No data record</div>)
            }
        </div>

    </div>
}