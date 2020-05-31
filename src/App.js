import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RecipeProvider } from './context/RecipeContext'
import { Home, NewRecipe } from './views'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator headerMode='none' >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="New" component={NewRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <RecipeProvider>
    <App />
  </RecipeProvider>
}
