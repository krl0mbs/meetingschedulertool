//import { CheckBox } from "react-native-web";
import { Button } from "react-native-web";
import { Checkbox } from "./Checkbox";

export const CheckFilter = () => (
    <div className="filter-box">
        <h4 style={{margin:"0", gap:"0", border:"0", display:"flex", justifyContent:"center", color:"#6f48eb",fontWeight:"normal"}}>Filter</h4>
        <Checkbox label="Display"/>
        <Checkbox label="Network"/>
        <Checkbox label="Video/Telecom"/>
        <Checkbox label="Capacity"/>
        <Checkbox label="Building"/>
        <button>Apply</button>
    </div>
)