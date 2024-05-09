import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Adminpage from "../pages/Adminpage";
import PageNotFound from "../pages/404";
import Authpage from "../pages/Authpage";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adminpage" element={<Adminpage />} />
      <Route path="/auth" element={<Authpage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
