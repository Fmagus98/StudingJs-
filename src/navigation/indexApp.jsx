import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {ProgrammingLanguages,ProgrammingLanguageOption,TeoryItem,TeoryItemDetail,ChallengeItem,ChallengeItemDetail} from "../components/Screens";
const stack = createNativeStackNavigator();

const IndexApp = ()=>{
    return(
        <stack.Navigator initialRouteName="IndexApp">
              <stack.Screen name="ProgrammingLanguages" component={ProgrammingLanguages} options={{title:"Selecciona un lenguage"}}/>
              <stack.Screen name="ProgrammingLanguageOption" component={ProgrammingLanguageOption}  options={({route})=>({title: route.params.title})}/>
              <stack.Screen name="TeoryItem" component={TeoryItem}   options={({route})=>({title: route.params.title})}></stack.Screen>
              <stack.Screen name="TeoryItemDetail" component={TeoryItemDetail}  options={({route})=>({title: route.params.title})}></stack.Screen>
              <stack.Screen name="ChallengeItem" component={ChallengeItem}   options={({route})=>({title: route.params.title})}></stack.Screen>
              <stack.Screen name="ChallengeItemDetail" component={ChallengeItemDetail}  options={({route})=>({title: route.params.title})}></stack.Screen>
        </stack.Navigator>
    )
}
export default IndexApp;