import MainPg from "./Component/MainPg .jsx";
import ContactMe from "./Component/contact/ContactMe.jsx";
import { Reset } from "styled-reset";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./reducer/store.js";
import MyPassion from "./Component/myPassion/MyPassion.jsx";

function App() {
  console.log(". ᘏ▸◂ᘏ ╭◜◝ ◜◝ ◜◝╮");
  console.log("꒰ ɞ̴̶̷ ·̮ ɞ̴̶̷ ꒱ .oO 섦이의 코딩 라이프를 응원해주렴... ᝰꪑ");
  console.log("( つ旦O ╰◟◞ ◟◞ ◟◞╯");
console.log('')
  console.log("　　　　∧∞∧");
  console.log("　　　（･∇･｡*)");
  console.log(" 　｡☆*ﾟ*｡　｡*ﾟUU☆｡)～");
  console.log(" 　*｡　 　☆   　*");
  console.log(" 　ﾟ*｡  　js ♥  *ﾟ");
  console.log(" 　　ﾟ*｡　　 ｡*ﾟ");
  console.log("　　 　ﾟ*｡｡*ﾟ");

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
