import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-[#f2f2f2] dark:bg-[#121721]">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
