import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    getDesserts();
  }, []);

  const getDesserts = async () => {
    const check = localStorage.getItem("desserts");
    if (check) {
      setDesserts(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=9&diet=vegetarian&tags=dessert&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();

      localStorage.setItem("desserts", JSON.stringify(data.recipes));
      setDesserts(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Trending Veggie Desserts</h3>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              640: {
                perPage: 1,
              },
              1024: {
                perPage: 2,
              },
              1440: {
                perPage: 3,
              },
            },
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}>
          {desserts.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    displat: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Desserts;
