import React from "react";

export default function DishCard({
  dish,
  isSelected,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) {
  const LIMIT = 70;
  const isLong = dish.description.length > LIMIT;
  const visible = dish.description.slice(0, LIMIT);

  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <h3>
        {dish.name}{" "}
        <span
          className={`dish-type-icon ${dish.type === "VEG" ? "veg" : "nonveg"}`}
        ></span>
      </h3>
      <p style={isLong ? { color: "#888" } : {}}>
        {isLong ? (
          <>
            {visible}
            ...{" "}
            <span
              className="read-more"
              onClick={() => onViewIngredients(dish)}
              style={{ color: "#222", fontWeight: 600, cursor: "pointer" }}
            >
              Read more
            </span>
          </>
        ) : (
          dish.description
        )}
      </p>
      <div className="button-positions">
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

// import React, { useState } from "react";

// export default function DishCard({
//   dish,
//   isSelected,
//   onAddDish,
//   onRemoveDish,
//   onViewIngredients,
// }) {
//   const [readMore, setReadMore] = useState(false);
//   const LIMIT = 70;
//   const isLong = dish.description.length > LIMIT;
//   const visible = dish.description.slice(0, LIMIT);
//   const hidden = dish.description.slice(LIMIT);

//   return (
//     <div className="dish-card">
//       <img src={dish.image} alt={dish.name} className="dish-image" />
//       <h3>
//         {dish.name}{" "}
//         <span
//           className={`dish-type-icon ${dish.type === "VEG" ? "veg" : "nonveg"}`}
//         ></span>
//       </h3>
//       <p style={!readMore && isLong ? { color: "#888" } : {}}>
//         {visible}
//         {!readMore && isLong ? (
//           <>
//             ...{" "}
//             <span
//               className="read-more"
//               onClick={() => setReadMore(true)}
//               style={{ color: "#222", fontWeight: 600, cursor: "pointer" }}
//             >
//               Read more
//             </span>
//           </>
//         ) : null}
//         {readMore && isLong ? (
//           <>
//             {hidden}{" "}
//             <span
//               className="read-more"
//               onClick={() => setReadMore(false)}
//               style={{ color: "#222", fontWeight: 600, cursor: "pointer" }}
//             >
//               Read less
//             </span>
//           </>
//         ) : null}
//       </p>
//       <div className="button-positions">
//         {!isSelected ? (
//           <button className="add-btn" onClick={() => onAddDish(dish.id)}>
//             Add +
//           </button>
//         ) : (
//           <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
//             Remove
//           </button>
//         )}
//         <button
//           className="ingredient-btn"
//           onClick={() => onViewIngredients(dish)}
//         >
//           Ingredient
//         </button>
//       </div>
//     </div>
//   );
// }
