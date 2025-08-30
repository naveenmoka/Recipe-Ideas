import React from 'react';
import '../App.css';

// Extract ingredients from meal object
function getIngredients(meal) {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) list.push(`${ing} — ${measure || ''}`);
  }
  return list;
}

export default function RecipeModal({ meal, onClose }) {
  if (!meal) return null;
  const ingredients = getIngredients(meal);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{meal.strMeal}</h2>
          <button onClick={onClose} className="modal-close">Close</button>
        </div>

        <div className="modal-body">
          <div className="modal-left">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="modal-image" />
            <p className="modal-category">{meal.strCategory} • {meal.strArea}</p>
          </div>

          <div className="modal-right">
            <h3 className="modal-subtitle">Ingredients</h3>
            <ul className="modal-ingredients">
              {ingredients.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>

            <h3 className="modal-subtitle">Instructions</h3>
            <p className="modal-instructions">{meal.strInstructions}</p>

            {meal.strYoutube && (
              <p className="modal-video">
                <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="modal-link">
                  Watch on YouTube
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
