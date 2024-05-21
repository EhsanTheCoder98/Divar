import React from "react";
import { Route, Routes } from "react-router-dom";
// react-query
import { useQuery } from "@tanstack/react-query";
import { userProfile } from "../services/user";
// pages
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Adminpage from "../pages/Adminpage";
import PageNotFound from "../pages/404";
import Authpage from "../pages/Authpage";

const Router = () => {
  const queryKey = ["profile"];
  const {data,isPending,error} = useQuery({queryKey,queryFn:userProfile});
  console.log({data,isPending,error});
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
