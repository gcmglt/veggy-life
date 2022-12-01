import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  let params = useParams();

  const getDishes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=9&diet=vegetarian&type=${name}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipes = await data.json();
    setDishes(recipes.results);
  };

  useEffect(() => {
    getDishes(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      {dishes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img
                src={item.image}
                alt={item.title}
              />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    border: 3px solid #39393a;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Dishes;
