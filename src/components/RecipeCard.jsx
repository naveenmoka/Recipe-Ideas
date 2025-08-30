import React from 'react';
import '../App.css'; 

export default function RecipeCard({ meal, onClick }) {
  return (
    <div
      onClick={() => onClick(meal.idMeal)}
      className="recipe-card"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="recipe-image"
      />
      <div className="recipe-info">
        <h3 className="recipe-name">{meal.strMeal}</h3>
      </div>
    </div>
  );
}

