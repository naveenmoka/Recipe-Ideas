import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (ingredient) => {
    if (!ingredient.trim()) {
      setError("Please enter at least one ingredient");
      return;
    }

    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      const ingredients = ingredient.split(",").map((i) => i.trim());
      if (!ingredients.length) return;

      // Fetch meals for first ingredient
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients[0]}`
      );
      let data = await response.json();
      let candidateMeals = data.meals || [];

      // Intersect meals with remaining ingredients
      for (let i = 1; i < ingredients.length; i++) {
        response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients[i]}`
        );
        data = await response.json();
        const currentIds = new Set((data.meals || []).map((m) => m.idMeal));
        candidateMeals = candidateMeals.filter((m) => currentIds.has(m.idMeal));
      }

      setRecipes(candidateMeals.length ? candidateMeals : []);
      if (!candidateMeals.length) setError("No recipes found containing all these ingredients.");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleMealClick = async (idMeal) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();
      setSelectedRecipe(data.meals?.[0] || null);
    } catch {
      alert("Failed to fetch recipe details. Try again.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🍳 Recipe Ideas Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="loading-text">Loading recipes...</p>}
      {error && <p className="error-text">{error}</p>}
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} meal={recipe} onClick={handleMealClick} />
        ))}
      </div>
      {selectedRecipe && (
        <RecipeModal meal={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}

export default App;
