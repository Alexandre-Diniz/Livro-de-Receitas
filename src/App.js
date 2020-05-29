import React from 'react'
import {
  View,
} from 'react-native'

import { List } from './components/List'
import { RecipeProvider } from './context/RecipeContext'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <List/>
    </View>
  )
}

export default () => {
  return <RecipeProvider>
    <App />
  </RecipeProvider>
}
