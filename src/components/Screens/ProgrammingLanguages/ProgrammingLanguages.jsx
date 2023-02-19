import { SafeAreaView, FlatList,Text } from 'react-native'
import React from 'react'
import Item from '../../Item/Item'
import { programmingLanguagesData } from '../../data/ProgrammingLanguagesData'
import { styles } from '../../Item/style'
const ProgrammingLanguages=({navigation}) => {
  const onSelected =(item)=>{
     navigation.navigate("ProgrammingLanguageOption",{
      programmingLanguageID:item.id,
      title:item.title
     })
  }
  const renderItem =({item})=> <Item item={item} title={item.title} styleSheet={styles.itemContainer} onSelected={onSelected}/>
  const keyExtractor =(item)=> item.id.toString();

  return (
    <SafeAreaView>
      <FlatList data={programmingLanguagesData} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  )
}
export default ProgrammingLanguages