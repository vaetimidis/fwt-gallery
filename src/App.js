import "./App.scss";
import { Header } from "./components";
import React from "react";

//hooks
import useTheme from "./hooks/useTheme";

function App() {
  // const { theme } = useTheme();

  return (
    // <div className={`App ${theme}`}>
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
