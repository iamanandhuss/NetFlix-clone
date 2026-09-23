import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "../src/context/AppContext";

const DashBoard = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const SendLink = lazy(() => import("./pages/sendLink"));
const ConfirmPage = lazy(() => import("./pages/confirmEmail"));
const Watch = lazy(() => import("./pages/Watch"));
const Browse_By_Languages = lazy(() => import("./pages/Browse_By_Languages"));
const MyList = lazy(() => import("./pages/MyList"));
const MovieHome = lazy(() => import("./pages/MovieHomes"));
const TV_Shows = lazy(() => import("./pages/TV_Shows"));
const Movies = lazy(() => import("./pages/Movies"));
const NewMovie = lazy(() => import("./pages/New"));
const WorkSpace=lazy(()=>import("./pages/WorkSpace"))



function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <AppProvider>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SendLink />} />
          <Route path="/ConfirmPage" element={<ConfirmPage />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/Browse_By_Languages" element={<Browse_By_Languages />} />
          <Route path="/MyList" element={<MyList />} />
          <Route path="/Home" element={<MovieHome />} />
          <Route path="/TV_Shows" element={<TV_Shows />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/New" element={<NewMovie />} />
          <Route path="/WorkSpace" element={<WorkSpace />} />
        </Routes>
      </AppProvider>
    </Suspense>
  );
}

export default App;
