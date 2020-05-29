import React, { useContext } from 'react'
import { 
  Text,
  FlatList,
  Button,
  View
 } from 'react-native'
import RecipeContext from '../context/RecipeContext'

export const List = () => {
  const { data, addRecipe } = useContext(RecipeContext)
  return (
    <View>
      <Button title='ADD ITEM' onPress={()=>addRecipe({title:'alexandre', id: `${new Date()}`})} />
      <FlatList
        data={data}
        keyExtractor={item=>item.id}
        renderItem={({ item }) => {
          return <Text> {item.title} </Text>
        }}
        />
    </View>
  )
}