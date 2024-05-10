import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MealPlanner = () => {
  const [name, setName] = useState("");
  const [meals, setMeals] = useState([]);
  const getdata = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    console.log(response);
    setMeals(response.data.meals);
  };

  const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

  return (
    <div>
      <div className="container d-flex justify-content-center gap-2 my-5">
        <input
          className="rounded text-center fs-2"
          style={{ width: "100%" }}
          type="text"
          placeholder="Search meal by name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br></br>
        <button
          className="btn btn-info rounded"
          onClick={() => {
            getdata();
          }}
        >
          Search
        </button>
      </div>
      <Container> <div className="container">
        <div className="row">
          {meals.map((meal, index) => {
            return (
              <div key={index} className="col-md-12">
                <div className="card mb-3">
                  <img
                    src={meal.strMealThumb}
                    className="card-img-top ms-auto me-auto rounded"
                    alt="..."
                    style={{ width: "300px" }}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center text-success fs-2">
                      {meal.strMeal}
                    </h5>
                    <p className="card-text text-muted">
                      {meal.strInstructions}
                    </p>
                    <p className="card-text">
                      <a href={meal.strYoutube} target="blank">
                        Check Youtube
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div></Container>
     
    </div>
  );
};

export default MealPlanner;
