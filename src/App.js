import React, { useState } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function getSelectedCounts(selectedDishesIds) {
  const counts = { STARTER: 0, "MAIN COURSE": 0, DESSERT: 0, SIDES: 0 };
  selectedDishesIds.forEach((id) => {
    const dish = dishes.find((d) => d.id === id);
    if (dish) {
      counts[dish.mealType] = (counts[dish.mealType] || 0) + 1;
    }
  });
  return counts;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [modalDish, setModalDish] = useState(null);

  // Filtering logic
  let filteredDishes = dishes.filter(
    (dish) => dish.mealType === selectedCategory
  );

  if (vegOnly && !nonVegOnly)
    filteredDishes = filteredDishes.filter((dish) => dish.type === "VEG");
  if (!vegOnly && nonVegOnly)
    filteredDishes = filteredDishes.filter((dish) => dish.type === "NON-VEG");
  // If both checked, show all. If none checked, show all.

  if (searchTerm)
    filteredDishes = filteredDishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Add/Remove handlers
  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id))
      setSelectedDishes([...selectedDishes, id]);
  };
  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  const selectedCounts = getSelectedCounts(selectedDishes);

  // Modal logic
  const openModal = (dish) => setModalDish(dish);
  const closeModal = () => setModalDish(null);

  return (
    <div className="app-container">
      <h1>Party Menu Selection App</h1>
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        onVegOnlyChange={setVegOnly}
        onNonVegOnlyChange={setNonVegOnly}
        selectedCounts={selectedCounts}
      />
      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={openModal}
      />
      <div className="bottom-bar">
        <span>
          Total Dishes Selected: <b>{selectedDishes.length}</b>
        </span>
        <button className="continue-btn" disabled>
          Continue
        </button>
      </div>
      <IngredientModal dish={modalDish} onClose={closeModal} />
    </div>
  );
}

export default App;
