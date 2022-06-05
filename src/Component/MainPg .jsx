import Content from "../Content";
import Header from "../Header";
import ContactMe from "../Component/contact/ContactMe";
import { Reset } from "styled-reset";
import { createContext } from "react";
import { useState } from "react";
import MyPassion from "./myPassion/MyPassion";

export const UserNavContext = createContext({
  page: {
    contactTop: "",
    myPassion: "",
    portFolio: "",
  },
  setPage: () => {},
}); //형제끼리 공유할 imit state값.. 하지만 이제 쓸데가 없다.

const MainPg = () => {
  const [page, setPage] = useState();
  const pageDate = {
    page,
    setPage,
  };

  return (
    <div>
      <UserNavContext.Provider value={pageDate}>
        <Header />
        <Content />
        <MyPassion />
        <ContactMe />
        <Reset />
      </UserNavContext.Provider>
    </div>
  );
};

export default MainPg;
