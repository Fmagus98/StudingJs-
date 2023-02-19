import { SafeAreaView,FlatList } from 'react-native';
import React from 'react';
import Item from "../../Item/Item";
import { styles } from '../../Item/style'

import { challengeJsData,challengeReactData,challengeReactNativeData } from '../../data/index';
const ChallengeItem=({navigation,route}) => {
  const {language,title}=route.params
  const data= language=="Javascript"?challengeJsData:language=="React"?challengeReactData:challengeReactNativeData
    const onSelected =(item)=>{
       navigation.navigate("ChallengeItemDetail",{
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
export default ChallengeItem