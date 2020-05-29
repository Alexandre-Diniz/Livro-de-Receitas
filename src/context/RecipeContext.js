import React, { createContext, useState, useEffect } from 'react'

const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log(data)
  }, [data]);

  const addRecipe = (recipe) => {
    console.log(recipe)
    setData([...data, recipe])
  }

  return <RecipeContext.Provider value={{ data, addRecipe }} >
    { children }
  </RecipeContext.Provider>
}

export default RecipeContext