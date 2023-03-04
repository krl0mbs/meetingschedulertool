import { Checkbox } from "./Checkbox";
import { ApplyFilters } from "./ApplyFilters";
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

    /* This is a function that sets the status of a main checkbox and will be called each time it is clicked.
       It takes in the current status of the checkbox as well as its index.
       The change is made by creating a duplicate filter array, changing the selected value
       in the copy, and then overwriting the original with the copy.
    */
    const checkHandler = (selected, i) => {
        let tmp = filters[i];
        tmp.values.fill(false, 0);
        tmp.selected = !selected;
        let filtersClone = [...filters];
        filtersClone[i] = tmp;
        setFilters([...filtersClone]);
        console.log(filters);
    };

    /* This is a function that sets the status of a sub-checkbox and will be called each time it is clicked.
       It takes in the index of the outer checkbox, the selected values for the sub-boxes that correspond to
       the outer checkbox, and the index for the chenged sub-checkbox.
       The change is made by creating a duplicate filter array, changing the value in the values array that
       corresponds to the correct sub-checkbox in the copy, and then overwriting the original with the copy.
    */
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
            {/* Maps the filters array in order to create the checkboxes that represent filter options */}
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
            <ApplyFilters filters = {filters}/>
        </div>
    )
}