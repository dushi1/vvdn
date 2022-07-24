import React from "react";
import "../App.css";
const OptionComponent = ({ title, data, onChange, error, mandatory }) => {
  return (
    <div className="Form-Container">
      <form className="Form">
        <div className="Form-Section">
          <label>
            {title}
            <h3 style={{ color: "red" }}>{mandatory ? "*" : ""}</h3>:
          </label>
          <select onChange={onChange}>
            <option key={"select"} value="">
              Select
            </option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <h6>{error}</h6>
      </form>
    </div>
  );
};

export default OptionComponent;
