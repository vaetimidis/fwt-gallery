import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        className="Search-input"
        type="text"
        placeholder="Name"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {JSONDATA.filter((val) => {
        if (SearchTerm == "") {
          return val;
        } else if (val.name.toLowerCase().includes(SearchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="search-name" key={key}>
            {/* <p>{val.name} </p> */}
          </div>
        );
      })}
    </div>
  );
};

const JSONDATA = [
  {
    name: "Toni Nicolas Jr.",
    email: "ibergstrom@hotmail.com",
    phone: "+1-717-521-8766",
  },

  {
    name: "Chanelle Orn DVM",
    email: "mhowell@harris.com",
    phone: "612.332.8917",
  },
  {
    name: "Austyn Osinski",
    email: "uzboncak@hotmail.com",
    phone: "+1-781-943-7242",
  },
];

export default SearchBar;
