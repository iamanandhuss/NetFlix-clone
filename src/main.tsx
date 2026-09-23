import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback.tsx";
import {AuthProvider } from "./context/Auth";
createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <ErrorBoundary
      FallbackComponent={ErrorFallback}

      onError={(error, info) => {
        console.log("Error:", error);
        console.log("Stack:", info.componentStack);
      }}

      onReset={() => {
        window.location.reload();
      }}
    >
      <AuthProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AuthProvider >

    </ErrorBoundary>

  </StrictMode>
);