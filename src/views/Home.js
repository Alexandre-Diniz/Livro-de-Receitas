import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native'

export const Home = props => {
  const { navigation } = props
  return(
    <View style={{ alignItems:'center' }} >
      <View style={{ flexDirection:'row', alignItems:'center', borderColor:'#aaa', borderWidth:1 }} >
        <TextInput style={{ height:40, width:200 }} placeholder='looking for' />
        <Button title='+' onPress={() => navigation.navigate('New')} />
      </View>

      <View>
        <View style={{ flexDirection:'row', alignItems:'center', borderColor:'#aaa', borderWidth:1 }} >
          <Text> Blog post #1 </Text>
          <Button title='edit' />
        </View>
        <View style={{ flexDirection:'row', alignItems:'center', borderColor:'#aaa', borderWidth:1 }} >
          <Text> Blog post #1 </Text>
          <Button title='edit' />
        </View>
        <View style={{ flexDirection:'row', alignItems:'center', borderColor:'#aaa', borderWidth:1 }} >
          <Text> Blog post #1 </Text>
          <Button title='edit' />
        </View>
        <View style={{ flexDirection:'row', alignItems:'center', borderColor:'#aaa', borderWidth:1 }} >
          <Text> Blog post #1 </Text>
          <Button title='edit' />
        </View>
      </View>
    </View>
  )
}