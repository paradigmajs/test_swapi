import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultPage from "../helpers/DefaultPage";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

export default function Navigation() {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/result/:query`} element={<Result />} />
      <Route path={`*`} element={<DefaultPage />} />
    </Routes>
  );
}
