/* eslint-disable no-unused-vars */
//single selection & multi selection
//accordion means hidden content revealed with a click (like a dropdown but the content will be visible once you click on it)

import { useState } from "react";
import data from "./data";
import "./style.css";
export default function Accordion() {
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...Multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
 
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }


  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [Multiple, setMultiple] = useState([]);
  console.log(selected, Multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button> 
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                    enableMultiSelection 
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)}
                className="title"
              > 
                <h3>{dataItem.question}</h3>
                <span>+</span>
                <div>
                    {
                        enableMultiSelection ? Multiple.indexOf(dataItem.id) !== -1 && (
                            <div className="content">{dataItem.answer}</div>
                        )
                        : selected === dataItem.id && (
                            <div className="content">{dataItem.answer}</div>
                        )
                    }
                  {/*selected === dataItem.id || Multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null*/}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data record</div>
        )}
      </div>
    </div>
  );
}
