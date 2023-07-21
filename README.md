
# RecipeBuddy


This is my first project built using the MERN stack.

The [MERN stack](https://www.mongodb.com/mern-stack) is a web development framework made up of the stack of MongoDB, Express.js, React.js, and Nodejs. It is one of the several variants of the [MEAN stack](https://www.mongodb.com/mean-stack).

Live Site: Click [here](https://recipebuddy.netlify.app/)

## Backstory

As a foodie, I always ran into the problem of not knowing what to do with the ingredients I had. It was usually a case of not having enough ingredients or not having the key ingredients for a meal. 

This is my first step towards solving this problem. 


## Directories

`client` contains the code for the frontend 

`server` contains the code for the backend

`package.json` contains the commands to build the project locally



## Installation

To setup this project locally, follow these steps
- Install [Node](https://nodejs.org/en/download)
- Clone this repository
- Access the `RecipeBuddy` directory
- Install all dependencies by running `npm install`
- Initalize the environment variables in the `client` and `server` directories
- Run the project by running `npm run start`

## Environment variables

For the client
- Create a `.env.themealdb` file in the client folder
- Initialize `REACT_APP_THE_MEAL_DB_API_KEY` to your API key from [TheMealDB](https://www.themealdb.com/api.php)

For the server
- Create a `.env` file in the server folder
- Initialize `MONGODB_URI` to your connection string from [MongoDB Atlas](https://www.mongodb.com/docs/guides/atlas/connection-string/)

## Features
- [x] Landing Page
- [x] Search for Recipes by Recipe title
- [x] Search for Recipes by Ingredients
- [x] Search for Recipes by Cuisines
- [x] Search for Recipes by Meal category
- [x] Signup & Login
- [x] View Profile
- [x] Save Recipes
- [x] View saved recipes
- [x] Export Ingredients list


Click [here](https://youtu.be/) to see how it works

## Next Steps

- Collapse Login and signup pages into one page
- Implement `reset password ` functionality

## Author
Fadolapo Oluwapelumi

[Email](mailto:pelumifadolapo7@gmail.com) [LinkedIn](https://www.linkedin.com/in/oluwapelumi-fadolapo/) [HashNode](https://hashnode.com/@pelumi7) [Medium](https://medium.com/@lumi_codes)
