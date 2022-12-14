import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let params = useParams();

  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img
          src={details.image}
          alt={details.title}
        />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => {
            setActive("instructions");
          }}>
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => {
            setActive("ingredients");
          }}>
          Ingredients
        </Button>

        {active === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {active === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  margin-bottom: 5rem;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  h3 {
    font-size: 0.9rem;
    line-height: 2rem;
  }
  li {
    font-size: 0.9rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 2rem;
    margin-left: 1rem;
  }
  img {
    width: 21rem;
    border: 3px solid #39393a;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-top: 2rem;
  margin-right: 2rem;
  font-weight: 600;
  width: 150px;
  height: 52px;
  text-align: center;
  @media (max-width: 560px) {
    width: 110px;
    height: 35px;
    font-size: 0.8rem;
    padding: 0;
  }
`;

const Info = styled.div`
  margin-left: 1rem;
`;

export default Recipe;
