import Pages from "./pages/Pages";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { IconContext } from "react-icons";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <IconContext.Provider value={{ color: "#a4cba9" }}>
            <FaLeaf />
          </IconContext.Provider>
          <Logo to={"/"}>Veggy Life</Logo>
          <Title>Your vegetarian recipes companion</Title>
        </Nav>
        <Search />
        <Categories />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 1rem;
  margin-left: auto;
  margin-top: 3px;
  text-align: center;
  color: #a4cba9;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
