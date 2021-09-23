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
    console.log('response ok', response);
    return response.json();
  } else {
    console.log('error in check', response.status)
    throw `${response.status} ERROR. Could not access server data.`
  }
}

export default apiCall;