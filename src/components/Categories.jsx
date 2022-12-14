import { GiNoodles, GiSandwich, GiCupcake } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <List>
      <StyledLink to={"/dishes/main%20course"}>
        <GiNoodles />
        <h4>Dishes</h4>
      </StyledLink>
      <StyledLink to={"/dishes/bread"}>
        <GiSandwich />
        <h4>Breads</h4>
      </StyledLink>
      <StyledLink to={"/dishes/dessert"}>
        <GiCupcake />
        <h4>Desserts</h4>
      </StyledLink>
      <StyledLink to={"/dishes/breakfast"}>
        <MdFreeBreakfast />
        <h4>Breakfast</h4>
      </StyledLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #93938a, #39393a);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #a4cba9, #37584b);
  }
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
  }
`;

export default Categories;
