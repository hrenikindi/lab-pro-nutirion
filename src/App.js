import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import foods from "./resources/FoodData";
import ItemSearch from "./components/ItemSearch";
import "./styles.css";

const App = () => {
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const handleAddItem = (item) => {
    const existingItem = selectedItems.find(
      (selectedItem) => selectedItem.name === item.name
    );

    if (existingItem) {
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem.name === item.name
          ? { ...selectedItem, quantity: selectedItem.quantity + item.quantity }
          : selectedItem
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const handleResetItem = (itemName) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) => selectedItem.name !== itemName
    );
    setSelectedItems(updatedItems);
  };

  return (
    <div>
      <ItemSearch onSearch={handleSearch} />
      {filteredFoods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onAdd={handleAddItem}
          onReset={handleResetItem}
        />
      ))}
      <div>
        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.quantity} {item.name} = {item.quantity * item.cal} cal
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
