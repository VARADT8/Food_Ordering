import AvaliableMeal from "./AvaliableMeal";
import MealsSummary from "./MealSummary";
import React from "react";
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvaliableMeal />
    </React.Fragment>
  );
};

export default Meals;
