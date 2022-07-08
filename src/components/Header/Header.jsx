import "./Header.scss";
import React, { useState } from "react";
import { Dropdown } from "../Dropdown";

//assets
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { IoSunny } from "react-icons/io5";

//hooks
import useTheme from "../../hooks/useTheme";
import SearchBar from "../SearchBar";

const Header = () => {
  const { toggleTheme } = useTheme();

  const [selected, setSelected] = useState("");

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
            <Logo />
          </a>
        </section>
        <div className="header-top__button" onClick={toggleTheme}>
          <IoSunny />
        </div>
      </section>
      <section className="header-bottom">
        <SearchBar />
        <Dropdown selected={selected} setSelected={setSelected} />
        {/* <Dropdown selected={selected} setSelected={setSelected} /> */}
        <section className="header-bottom__filter"></section>
      </section>
    </section>
  );
};

export default Header;
