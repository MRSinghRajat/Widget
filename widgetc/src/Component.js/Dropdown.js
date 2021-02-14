import React, { useState, useRef } from "react";

function Dropdown({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const funCall = (event, option) => {
    console.log(ref);
    onSelectedChange(option);
  };

  const renderedList = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        ref={ref}
        key={option.value}
        className="item"
        onClick={(event) => funCall(event, option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label"> Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible" : ""} transition`}>
            {renderedList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
