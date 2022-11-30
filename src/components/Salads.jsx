import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";

const Salads = () => {
  const [salads, setSalads] = useState([]);

  useEffect(() => {
    getSalads();
  }, []);

  const getSalads = async () => {
    const check = localStorage.getItem("salads");
    if (check) {
      setSalads(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=9&diet=vegetarian&type=salad&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();

      localStorage.setItem("salads", JSON.stringify(data.recipes));
      setSalads(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Trending Veggie Salads</h3>
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
              1024: {
                perPage: 2,
              },
            },
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}>
          {salads.map((recipe) => {
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

export default Salads;
