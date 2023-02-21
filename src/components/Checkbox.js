import "../pages/pageCSS/Checkbox.css";
import { useState } from "react"; 

export const Checkbox = ({ label, checkHandler, selected, subOptions, values}) => {
  return (
    // {if (selected){
      
    // }}

    // <div className="checkbox-wrapper">
    //   <label className="checkbox-label">
    //     <input type="checkbox" onChange = {checkHandler} />
    //     <span>{label}</span>
    //   </label>
    // </div>
      <div className="checkbox-wrapper">
        <label className="checkbox-label">
          <input type="checkbox" onChange = {checkHandler} />
          <span>{label}</span>
        </label>
        {/* suboptions */}
        { selected &&
         <div> 
            {/* {map through suboptions } */}
            {subOptions.map(({values}, i) => (
              <div className="checkbox-wrapper">
                <label className="checkbox-label">
                  <input type="checkbox" onChange = {checkHandler} />
                  <span>{subOptions[i]}</span>
                </label>
              </div>
            ))}
        </div>}
      </div>
  );
};

