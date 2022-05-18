import { PageTransition } from "@steveeeie/react-page-transition";
import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { pages } from "../pages";
import { AppContext } from "./AppContext";
import { Page } from "./Page";

function Pages() {
  const location = useLocation();
  const appContext = useContext(AppContext);

  if (appContext) {
    return (
      <PageTransition
        preset={appContext.preset}
        transitionKey={location.pathname}
        enterAnimation={appContext.enterAnimation || ""}
        exitAnimation={appContext.exitAnimation || ""}
      >
        <Routes location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                key={index}
                path={page.path}
                element={<Page page={page} />}
              />
            );
          })}
          <Route path="/" element={<Navigate to="/page-1" />} />
        </Routes>
      </PageTransition>
    );
  }

  return null;
}

export { Pages };
