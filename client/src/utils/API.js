const theMealDbApiKey = process.env.REACT_APP_THE_MEAL_DB_API_KEY;
// Get yuor api key from https://www.themealdb.com/api.php

export const searchRecipes = (query) => {
  return fetch(`https://www.themealdb.com/api/json/v2/${theMealDbApiKey}/${query}`);
};