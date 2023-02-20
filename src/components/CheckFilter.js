//import { CheckBox } from "react-native-web";
import { Button } from "react-native-web";
import { Checkbox } from "./Checkbox";
import { useState, useEffect } from "react";

export const CheckFilter = () => {
    const [filters, setFilters] = useState([
        { filterItem: "Display", selected: false },
        { filterItem: "Network", selected: false },
        { filterItem: "Video/Telecom", selected: false },
        { filterItem: "Capacity", selected: false },
        { filterItem: "Bulding", selected: false },
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
            {console.log(filters)}
            <h4 style={{margin:"0", gap:"0", border:"0", display:"flex", justifyContent:"center", color:"#6f48eb",fontWeight:"normal"}}>Filter</h4>
            {filters.map(({ filterItem, selected }, i) => (
                <div key={i}>
                    <label htmlFor={i}>
                        <Checkbox
                            onChange={() => checkHandler(selected, i)}
                            label={filterItem}
                        />
                        {console.log(filters)}
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

