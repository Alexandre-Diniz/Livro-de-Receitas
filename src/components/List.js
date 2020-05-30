import React, { useContext } from 'react'
import { 
  Text,
  FlatList,
  Button,
  View
 } from 'react-native'
import RecipeContext from '../context/RecipeContext'
import { getRealm } from '../services/realm'

export const List = () => {
  const { data, addRecipe } = useContext(RecipeContext)
  return (
    <View>
      <Button title='ADD ITEM' onPress={()=>{
        getRealm().then(realm=>{
          realm.write(()=>{
            realm.create('Recipe',{
              title: `alexandre-${new Date()}`,
              ingredients: [],
              directions: []
            })
          })
        })
      }} />
      <Button title='SHOW ITEM' onPress={()=>{
        getRealm().then(realm=>{
          const data = realm.objects('Recipe')
          console.log('data: ',data)
        })
      }} />
      <Button title='CLOSE' onPress={()=>{
        getRealm().then(realm=>{
          realm.close()
        })
      }} />
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