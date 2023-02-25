import "./MealItemForm.css";
import React from "react";
import { useRef } from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();

  const submithandler = (event) => {
    event.preventDefault();
    const totalAmountEntered = inputAmountRef.current.value;
    const totalAmountEnteredNumber = +totalAmountEntered;

    if (
      totalAmountEntered.trim().length === 0 ||
      totalAmountEnteredNumber < 1 ||
      totalAmountEnteredNumber > 5
    ) {
      return;
    }
    props.onAddToCart(totalAmountEnteredNumber);
  };

  return (
    <form className="form" onSubmit={submithandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ADD</button>
    </form>
  );
};
export default MealItemForm;
