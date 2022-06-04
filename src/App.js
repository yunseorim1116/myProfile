import MainPg from "./Component/MainPg .jsx";
import ContactMe from "./Component/contact/ContactMe.jsx";
import { Reset } from "styled-reset";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./reducer/store.js";

function App() {
  return (
    <>
      {/* <MainPg /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPg />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
