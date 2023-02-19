import { View, Text } from 'react-native'
import React from 'react'
import Item from '../../Item/Item'
import { useNavigation } from '@react-navigation/native'
const ChallengeItemDetail=() => {
  const navigation = useNavigation();
  const options=[{id:1,name:"teory"}, {id:2,name:"Challenge"}]
    const languagesList= options.map(p=><Item key={p.id}name={p.name} goTo={p.name}/>)
  return (
    <View>
      {languagesList}
    </View>
  )
}
export default ChallengeItemDetail