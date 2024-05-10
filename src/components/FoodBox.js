import React, { useState } from "react";

const FoodBox = ({ food, onAdd, onReset }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAdd({ ...food, quantity });
  };

  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleReset = () => {
    onReset(food.name);
  };

  return (
    <div className="food-item">
      <article className="food-item-content">
        <div className="food-item-left">
          <figure className="food-item-image">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="food-item-details">
          <div className="food-item-info">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
          <div className="food-item-controls">
            <div className="food-item-quantity">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="food-item-buttons">
              <button className="button is-info" onClick={handleAdd}>
                +
              </button>
              <button className="button is-danger" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
