//import { CheckBox } from "react-native-web";
import { Button } from "react-native-web";
import { Checkbox } from "./Checkbox";
import { useState, useEffect } from "react";

export const CheckFilter = () => {
    const [filters, setFilters] = useState([
        { filterItem: "Display", selected: false, subOptions: [] },
        { filterItem: "Network", selected: false, subOptions: []},
        { filterItem: "Video/Telecom", selected: false, subOptions: [] },
        { filterItem: "Capacity", selected: false, subOptions: [] },
        { filterItem: "Building", selected: false, subOptions: ["Building 1", ], values: new Array(3).fill(false) },
    ]);

    const checkHandler = (selected, i) => {
        let tmp = filters[i];
        tmp.selected = !selected;
        let filtersClone = [...filters];
        filtersClone[i] = tmp;
        setFilters([...filtersClone]);
        console.log(filters);
    };

// Goal is to update an object array to keep 
// track of which filters have been selected, 
// apply will export the array to the database 
// and return only rooms that fit the filters chosen.

    return(
        <div className="filter-box">
            <h4 style={{margin:"0", gap:"0", border:"0", display:"flex", justifyContent:"center", color:"#6f48eb",fontWeight:"normal"}}>Filter</h4>
            {filters.map(({ filterItem, selected, subOptions }, i) => (
                <div key={i}>
                    <label htmlFor={i}>
                        <Checkbox
                            checkHandler={() => checkHandler(selected, i)}
                            label={filterItem}
                            selected = {selected}
                            subOptions = {subOptions}
                        />
                    </label>
                </div>
            ))}
        <button>Apply</button>
        </div>
        
        // Old Filter component
        // <div className="filter-box">
        // <h4 style={{margin:"0", gap:"0", border:"0", display:"flex", justifyContent:"center", color:"#6f48eb",fontWeight:"normal"}}>Filter</h4>
        // <Checkbox label="Display" checked={false}/>
        // <Checkbox label="Network"/>
        // <Checkbox label="Video/Telecom"/>
        // <Checkbox label="Capacity"/>
        // <Checkbox label="Building"/>
        // <button>Apply</button>
        // </div>
    )
}

