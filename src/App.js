import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Content />
        <Footer />
      </Provider>
      <Reset />
    </>
  );
}

export default App;
