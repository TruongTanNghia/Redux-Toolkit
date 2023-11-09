import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AddEdit from "../pages/addEdit";
import View from "../pages/view";

const IndexRouter = () => {
  return (
    <>
      <React.Fragment>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="/view/:id" element={<View />} />
          </Routes>
        </div>
      </React.Fragment>
    </>
  );
};

export default IndexRouter;
