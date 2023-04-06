// This file is for the checkboxes used in the filter 

import "../pages/pageCSS/Checkbox.css";
import { useState } from "react"; 

export const Checkbox = ({ label, checkHandler, selected, subOptions, values, subBoxHandler, FilterIndex}) => {
  
  return (
      // This section of code creates a checkbox based on the label and checkHandler props
      <div className="checkbox-wrapper">
        <label className="checkbox-label">
          {/* checkHandler is passed in from the FilterMenu, go to FilterMenu.js for more information */}
          <input type="checkbox" onChange = {checkHandler} />
          <span>{label}</span>
        </label>

        {/* This section of code creates all the suboptions for the checkbox if there are any.
            The suboptions are specified by the "subOptions" prop and their selected values are
            specified by the "values" prop. The subBoxHandler is used to handle any changes
            that occur in the suboption that should not occur in the main checkbox.
        */}
        { selected && // Makes it so the suboptions only appear when the main checkbox is selected
         <div> 
            {/* map through suboptions */}
            {subOptions.map((suboptions, i) => (
              <div key = {i} className="subBox-wrapper">
                <label className="subBox-label">
                  {/* subBoxHandler is passed in from the FilterMenu, go to FilterMenu.js for more information */}
                  <input type="checkbox" onChange = {() => subBoxHandler(values, i, FilterIndex)} /> 
                  <span>{subOptions[i]}</span>
                </label>
              </div>
            ))}
        </div>}
      </div>
  );
};

