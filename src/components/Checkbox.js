import "../pages/pageCSS/Checkbox.css";

export const Checkbox = ({ label }) => {
    return (
      <div className="checkbox-wrapper">
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>{label}</span>
        </label>
      </div>
    );
  };