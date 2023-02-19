import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {ProgrammingLanguages,ProgrammingLanguageOption,TeoryItem,TeoryItemDetail,ChallengeItem,ChallengeItemDetail} from "../components/Screens";
const stack = createNativeStackNavigator();
import {Profile} from "../components/Screens"
const IndexApp = ()=>{
    return(
        <stack.Navigator initialRouteName="Index">
              <stack.Screen name="Profile" component={Profile}/>
        </stack.Navigator>
    )
}
export default IndexApp;