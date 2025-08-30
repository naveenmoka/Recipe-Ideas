// Simple API helpers for TheMealDB
const BASE = 'https://www.themealdb.com/api/json/v1/1'


export async function fetchByIngredient(ingredient) {
const url = `${BASE}/filter.php?i=${encodeURIComponent(ingredient)}`
const res = await fetch(url)
if (!res.ok) throw new Error('Network response was not ok')
const json = await res.json()
return json.meals // may be null if none
}


export async function fetchMealById(id) {
const url = `${BASE}/lookup.php?i=${id}`
const res = await fetch(url)
if (!res.ok) throw new Error('Network response was not ok')
const json = await res.json()
return json.meals ? json.meals[0] : null
}