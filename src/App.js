import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Reset } from "styled-reset";

import store from "./reducer/store.js";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />

      <Reset />
    </>
  );
}

export default App;
