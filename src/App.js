import Pages from "./pages/Pages";
import Search from "./components/Search";
import Categories from "./components/Categories";

import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <FaLeaf />
          <Logo to={"/"}>Veggy Life</Logo>
        </Nav>
        <Search />
        <Categories />
        <Pages />
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

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
