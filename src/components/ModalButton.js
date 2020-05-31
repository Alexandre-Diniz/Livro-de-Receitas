import React, { useEffect } from 'react'
import {
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

export const ModalButton = props => {
  const { color, title, source } = props

  return (
    <TouchableOpacity 
      style={{ 
        height:40, 
        width:170, 
        borderRadius:5, 
        backgroundColor:color,
        flexDirection:'row',
        alignItems:'center', justifyContent:'center' }} >
      <Text style={[{ fontSize:18 ,fontFamily:'dancing' }]} > {title} </Text>
      <Image source={source} style={{ width:30, height:30 }} />
    </TouchableOpacity>
  )
}