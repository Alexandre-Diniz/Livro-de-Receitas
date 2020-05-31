import React, { createContext, useState, useEffect } from 'react'

const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const [data, setData] = useState([])

  const getAllRecipes = (data) => {
    setData(data)
    console.log('data aqui: ', data)
  }

  const addRecipe = (recipe) => {
    console.log(recipe)
    setData([...data, recipe])
  }

  return <RecipeContext.Provider value={{ data, addRecipe, getAllRecipes }} >
    { children }
  </RecipeContext.Provider>
}

export default RecipeContext