import React from "react";
import { Route, Routes } from "react-router-dom";
import router from "./router";

const RoutersProviders = () => {
  return (
    <Routes>
      {router.map((route) => (
        <Route
          path={route.path}
          element={route.component}
          key={route.path}
        ></Route>
      ))}
    </Routes>
  );
};

export default RoutersProviders;
