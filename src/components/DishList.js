import React from "react";
import DishCard from "./DishCard";

export default function DishList({
  dishes,
  onAddDish,
  onRemoveDish,
  selectedDishes,
  onViewIngredients,
}) {
  if (!dishes.length) return <div>No dishes found.</div>;

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selectedDishes.includes(dish.id)}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}
