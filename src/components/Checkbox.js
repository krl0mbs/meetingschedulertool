import "../pages/pageCSS/Checkbox.css";
import { useState } from "react"; 

export const Checkbox = ({ label, checkHandler, selected, subOptions, values, subBoxHandler}) => {
  const [subValues, setSubValues] = useState(values)

  // const subBoxHandler = (i) => {
  //   // let tmp = values[i];
  //   // tmp = !tmp;
  //   // let valuesClone = [...values];
  //   // valuesClone[i] = tmp;
  //   // setFilters([...filtersClone]);
  //   values[i] = !values[i]
  //   console.log(values[i]);
  // }
  
  return (
      <div className="checkbox-wrapper">
        <label className="checkbox-label">
          <input type="checkbox" onChange = {checkHandler} />
          <span>{label}</span>
        </label>
        {/* suboptions */}
        { selected &&
         <div> 
            {/* {map through suboptions } */}
            {subOptions.map((suboptions, i) => (
              <div key = {i} className="subBox-wrapper">
                <label className="subBox-label">
                  <input type="checkbox" onChange = {subBoxHandler} />
                  <span>{subOptions[i]}</span>
                </label>
              </div>
            ))}
        </div>}
      </div>
  );
};

