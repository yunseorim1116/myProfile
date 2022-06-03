import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Reset } from "styled-reset";

import store from "./reducer/store.js";
import ContactMe from "./Component/contact/contactMe";

function App() {
  return (
    <>
      <Header />
      <Content />

      <Footer />
      <ContactMe />
      <Reset />
    </>
  );
}

export default App;
