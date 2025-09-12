import React from "react";

export default function IngredientModal({ dish, onClose }) {
  if (!dish) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="ingredient-modal" onClick={(e) => e.stopPropagation()}>
        <img src={dish.image} alt={dish.name} className="modal-image" />
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <h4>Ingredients</h4>
        <ul>
          {dish.ingredients.map((ing, idx) => (
            <li key={idx}>
              {ing.name}: {ing.quantity}
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
