import React from "react";
import "../App.css";
const FormComponent = ({
  title,
  value,
  onChange,
  error,
  type,
  maxLength,
  mandatory,
  multiline,
}) => {
  return (
    <div className="Form-Container">
      <form className="Form">
        <div className="Form-Section">
          <label>
            {title}
            <h3 style={{ color: "red" }}>{mandatory ? "*" : ""}</h3>:
          </label>
          <input
            type={type}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            style={{ height: multiline ? "80px" : "40px" }}
          />
        </div>
        <h6>{error}</h6>
      </form>
    </div>
  );
};

export default FormComponent;
