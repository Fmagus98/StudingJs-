import {View } from "react-native"
import {styles} from "./style"
import Item from "../../../Item/Item"
const ItemContainer=()=>{

    const contentChallenge=[
        {id:1, name:"Challenge 1"},
        {id:2, name:"Challenge 2"},
        {id:3, name:"Challenge 3"},
        {id:4, name:"Challenge 4"},
        {id:5, name:"Challenge 5"},
        {id:6, name:"Challenge 6"},
        {id:7, name:"Challenge 7"},
        {id:8, name:"Challenge 8"},
    ]
const goToChallenge=(id)=>{
    console.log("hi")
}
const Challenge = contentChallenge.map(c=><Item key={c.id} onHandlder={goToChallenge(c.id)} name={c.name}/>)

    return(
        <View>
            {Challenge}
        </View>
    )
}
export default ItemContainer