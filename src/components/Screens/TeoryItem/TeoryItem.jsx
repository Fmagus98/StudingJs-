import { SafeAreaView, FlatList,View} from 'react-native'
import React from 'react'
import Item from '../../Item/Item'
import { styles } from '../../Item/style'
import {teoryJsData, teoryReactData, teoryReactNativeData} from "../../data/index" 
const TeoryItem=({navigation,route}) => {
  const {language,title}=route.params
  const data= language=="Javascript"?teoryJsData:language=="React"?teoryReactData:teoryReactNativeData
    const onSelected =(item)=>{
       navigation.navigate("TeoryItemDetail",{
        teoryItemID:item.id,
        language:title,
        title:item.title,
       })
    }
    const renderItem =({item})=> <Item item={item} title={item.title} styleSheet={styles.itemContainer} onSelected={onSelected}/>
    const keyExtractor =(item)=> item.id.toString();
    return (
      <SafeAreaView>
        <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
      </SafeAreaView>
)

}
export default TeoryItem