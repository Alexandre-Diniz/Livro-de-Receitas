import React from 'react'
import {
  View,
  TextInput,
  Button
} from 'react-native'

import { ModalButton } from '../components'

const INGREDIENTS = '../assets/icons/ingredients.png'
const DIRECTIONS = '../assets/icons/directions.png'

export const NewRecipe = () => {
  
  return (
    <View style={{ backgroundColor: '#eee' }} >
      <TextInput placeholder='Title of your recipe' />
      <View style={{ flexDirection: 'row', justifyContent:'space-around' }} >
        <ModalButton title='Ingredientes' source={require(INGREDIENTS)} color='#EF5050' />
        <ModalButton title='Modo de Fazer' source={require(DIRECTIONS)} color='#64B0D9' />
      </View>
    </View>
  )
}