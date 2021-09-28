require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;
const appID = process.env.REACT_APP_ID;

const apiCall = {

  getRecipes: (food) => {
    return fetch(`https://api.edamam.com/api/recipes/v2?q=${food}&app_id=${appID}&app_key=${apiKey}&type=public`)
    .then(response => checkForErrors(response))
  }

}

const checkForErrors = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
}

export default apiCall;