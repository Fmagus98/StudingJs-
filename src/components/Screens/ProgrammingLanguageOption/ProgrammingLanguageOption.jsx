import { SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import Item from '../../Item/Item'
import { styles } from '../../Item/style'


  const ProgrammingLanguageOption=({navigation,route}) => {
  const {title}=route.params
  const options=[{id:1,title:"Teoria", nav:"TeoryItem"}, {id:2,title:"Desafios",nav:"ChallengeItem"}]

    const onSelected =(item)=>{
       navigation.navigate(item.nav,{
        programmingLanguageOptionID:item.id,
        language:title,
        title:`${title} ${item.title}`
       })
    }
    const renderItem =({item})=> <Item item={item} title={item.title} styleSheet={styles.itemContainer} onSelected={onSelected}/>
    const keyExtractor =(item)=> item.id.toString();
    return (
      <SafeAreaView>
        <FlatList data={options} renderItem={renderItem} keyExtractor={keyExtractor} />
      </SafeAreaView>
)

}
export default ProgrammingLanguageOption