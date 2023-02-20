import "../pages/pageCSS/Checkbox.css";
import { useState } from "react"; 

export const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-label">
        <input type="checkbox" onChange={() => setIsChecked((prev) => !prev)}/>
        <span>{label}</span>
      </label>
    </div>
  );
};

