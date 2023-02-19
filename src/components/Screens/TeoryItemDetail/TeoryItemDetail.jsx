import { SafeAreaView,FlatList} from 'react-native'
import React from 'react'
import Item from '../../Item/Item'
import { teoryJsData} from '../../data'
const TeoryItemDetail=({navigation,route}) => {
  const {teoryItemID,title}=route.params
    const onSelected =(item)=>{
       navigation.navigate("TeoryItemDetail",{
        teoryItemDetailID:item.id,
        language:title,
        title:item.title,
       })
    }
    return (
      <SafeAreaView>
      </SafeAreaView>
)

}
export default TeoryItemDetail