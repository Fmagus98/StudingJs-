import { View, Text } from 'react-native'
import React from 'react'
import Item from '../../../Item/Item'
import { useNavigation } from '@react-navigation/native'
const Languages=() => {
  const navigation = useNavigation();
    const languageListData=[{id:1,name:"Javascript"},{id:2,name:"React Js"},{id:3,name:"React Native"}]
    const languagesList= languageListData.map(p=><Item key={p.id}name={p.name} goTo={p.name}/>)
  return (
    <View>
      {languagesList}
    </View>
  )
}
export default Languages