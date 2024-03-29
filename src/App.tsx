import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

const HomePage = lazy(() => import("./pages/home"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="*" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
