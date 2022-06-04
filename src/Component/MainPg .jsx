import Content from "../Content";
import Header from "../Header";
import ContactMe from "../Component/contact/ContactMe";
import { Reset } from "styled-reset";
import { createContext } from "react";
import { useState } from "react";

export const UserNavContext = createContext({
  page: {
    contactTop: "",
    myPassion: "",
    portFolio: "",
  },
  setPage: () => {},
});

const MainPg = () => {
  const [page, setPage] = useState();
  const pageDate = {
    page,
    setPage,
  };

  const OnNavclick = () => {
    console.log("안녕~");

  
  };

  return (
    <div>
      <UserNavContext.Provider value={pageDate}>
        <Header OnNavclick={OnNavclick} />
        <Content />
        <ContactMe />
        <Reset />
      </UserNavContext.Provider>
    </div>
  );
};

export default MainPg;
