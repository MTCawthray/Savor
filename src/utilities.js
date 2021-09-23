require('dotenv').config();

//this should be grabbing my api key from the ignored .env directory
const apiKey = process.env.REACT_APP_API_KEY;
export const getRecipes = (type) => {
  fetch(`https://api.spoonacular.com/recipes/?query=${type}&number=5&${apiKey}`)
  .then(response => checkForErrors(response))
}

const checkForErrors = (res) => {
  if (res.ok) {
    return response.json();
  } else {
    throw `${response.status} ERROR. Could not access server data.`
  }
}