import React from "react";
import { Navigate, Route, Routes as RouterRouts } from "react-router";
import { Pages } from "./Pages";

function Routes() {
  return (
    <RouterRouts>
      <Route path="/" element={<Navigate to="/page-1" />} />
      <Route path="/*" element={<Pages />} />
    </RouterRouts>
  );
}

export { Routes };
