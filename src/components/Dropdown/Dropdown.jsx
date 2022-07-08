import React, { useState } from "react";
import "./Dropdown.scss";

import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setActive] = useState(false);

  const options = ["Author1", "Author2", "Author3"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setActive(!isActive)}>
        {selected}
        <IoMdArrowDropdown />{" "}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
