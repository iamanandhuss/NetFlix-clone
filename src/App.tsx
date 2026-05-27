import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const DashBoard = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const SendLink=lazy(()=> import("./pages/sendLink"))
const ConfirmPage=lazy(()=> import("./pages/confirmEmail"))



function App() {

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SendLink />} />
        <Route path="/ConfirmPage" element={<ConfirmPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;