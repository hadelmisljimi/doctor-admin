import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import { routes } from "../routes.jsx";

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" />
          </div>
        }
      >
        <Routes>
  {routes.map((route, idx) => (
    <Route
      key={idx}
      path={route.path}
      element={route.element}
    />
  ))}
</Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);