import React from "react";

export default function DishCard({
  dish,
  isSelected,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <h3>
        {dish.name}{" "}
        <span
          className={`dish-type-icon ${dish.type === "VEG" ? "veg" : "nonveg"}`}
        ></span>
      </h3>
      <p>{dish.description}</p>
      <div className="card-actions">
        {!isSelected ? (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>
            Add +
          </button>
        ) : (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
            Remove
          </button>
        )}
        <button
          className="ingredient-btn"
          onClick={() => onViewIngredients(dish)}
        >
          Ingredient
        </button>
      </div>
    </div>
  );
}
