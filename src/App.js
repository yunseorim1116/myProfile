import MainPg from "./Component/MainPg .jsx";
import ContactMe from "./Component/contact/ContactMe.jsx";
import { Reset } from "styled-reset";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./reducer/store.js";
import MyPassion from "./Component/myPassion/MyPassion.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPg />}></Route>
          <Route path="/mypassion" element={<MyPassion />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
