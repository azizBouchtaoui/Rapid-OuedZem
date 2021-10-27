import React from "react";
import "./Button.css";

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <label style={{ background: isOn && onColor }} className="react-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>Local</span>
        <span>Local</span>
       
      </div>
    </label>
  );
};

export default Switch;