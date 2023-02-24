import { Checkbox } from "./Checkbox";
import { useState, useEffect } from "react";

export const CheckFilter = () => {
    /* This is an object array that will hold all of the checkboxes in the "Filters" section.
       The "filterItem" prop is the name of the checkbox,
    */
    const [filters, setFilters] = useState([
        { filterItem: "Display", selected: false, subOptions: [], values: new Array(3).fill(false) },
        { filterItem: "Network", selected: false, subOptions: ["Classified", "Non-Classified"], values: new Array(2).fill(false)},
        { filterItem: "Video/Telecom", selected: false, subOptions: [], values: new Array(3).fill(false) },
        { filterItem: "Capacity", selected: false, subOptions: ["10", "20", "30", "40"], values: new Array(4).fill(false)},
        { filterItem: "Building", selected: false, subOptions: ["Building 1", "Building 2", "Building 3"], values: new Array(3).fill(false) },
        { filterItem: "Connectivity", selected: false, subOptions: ["WiFi", "Ethernet"], values: new Array(2).fill(false)}
    ]);

    const checkHandler = (selected, i) => {
        let tmp = filters[i];
        tmp.values.fill(false, 0);
        tmp.selected = !selected;
        let filtersClone = [...filters];
        filtersClone[i] = tmp;
        setFilters([...filtersClone]);
        console.log(filters);
    };

    const subBoxHandler = (values, i, FilterIndex) => {
        let tmp = filters[FilterIndex];
        tmp.values[i] = !values[i];
        let filtersClone = [...filters];
        filtersClone[FilterIndex] = tmp;
        setFilters([...filtersClone]);
        console.log(filters);
    };

    return(
        <div className="filter-box">
            <h4 style={{margin:"0", gap:"0", border:"0", display:"flex", justifyContent:"center", color:"#6f48eb", fontWeight:"normal", fontSize:"24px"}}>Filters</h4>
            {filters.map(({ filterItem, selected, subOptions, values }, i) => (
                <div key={i}>
                    <label htmlFor={i}>
                        <Checkbox
                            checkHandler={() => checkHandler(selected, i)}
                            label={filterItem}
                            selected = {selected}
                            subOptions = {subOptions}
                            values = {values}
                            subBoxHandler = {subBoxHandler}
                            FilterIndex = {i}
                        />
                    </label>
                </div>
            ))}
        <button className="apply-button">Apply</button>
        </div>
    )
}

