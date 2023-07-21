/* eslint-disable no-unused-vars */ 
import React, { createContext, useContext } from "react";
import { useRecipeReducer } from './reducers'

const RecipeContext = createContext();
const { Provider } = RecipeContext;

const RecipeProvider = ({ value = [], ...props }) => {

    const initialState = {
        
        categories: [],
        // areas,
        
        products: [],
        cart: [],
        cartOpen: false,
        
        currentCategory: '',
        category: '',
        area: '',
        ingredient: '',
        mealName: '',

    };

    // console.log("categories: ", initialState.categories);
    // console.log("areas: ", initialState.areas);

    const [state, dispatch] = useRecipeReducer(initialState);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useRecipeContext = () => {
    return useContext(RecipeContext);
};

export { RecipeProvider, useRecipeContext };