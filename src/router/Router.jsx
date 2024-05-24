import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
  const {data,isPending,error} = useQuery({queryKey:["profile"],queryFn:userProfile});
  console.log({data,isPending,error});
  if(isPending) return <h1>LOADING...</h1>
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/dashboard" element={data ? <Dashboard /> : <Navigate to="/auth"/>} />
      <Route path="/adminpage" element={data && data.data.role ==="ADMIN" ? <Adminpage /> : <Navigate to="/"/>} />
      <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <Authpage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
