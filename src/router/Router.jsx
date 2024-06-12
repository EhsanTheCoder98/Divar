import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// react-query
import { useQuery } from "@tanstack/react-query";
import { userProfile } from "../services/user";
// components
import Loader from "../components/modules/Loader";
// pages
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Adminpage from "../pages/Adminpage";
import PageNotFound from "../pages/404";
import Authpage from "../pages/Authpage";

const Router = () => {
  const {data,isPending} = useQuery({queryKey:["profile"],queryFn:userProfile});
  if(isPending) return <Loader />;
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/dashboard" element={data ? <Dashboard /> : <Navigate to="/auth"/>} />
      <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <Authpage />} />
      <Route path="/adminpage" element={data && data.data.role ==="ADMIN" ? <Adminpage /> : <Navigate to="/"/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
