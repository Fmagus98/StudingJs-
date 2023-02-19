import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Profile from "../navigation/profile";
import IndexApp from "../navigation/indexApp";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../components/constants/colors";

const BottomTab= createBottomTabNavigator();

const Tabs=()=>{
    return(
        <BottomTab.Navigator initialRouteName="IndexTab" screenOptions={{headerShown:false}}>
            <BottomTab.Screen name={"IndexTab"} component={IndexApp} options={{tabBarIcon:({focused})=>(   <MaterialCommunityIcons name={"home"} size={37} color={focused?colors.primary:"grey"} />)}}/>
            <BottomTab.Screen name={"ProfileTab"} component={Profile} options={{tabBarIcon:({focused})=>(   <FontAwesome name={"user"} size={32} color={focused?colors.primary:"grey"} />)}}/>
        </BottomTab.Navigator>
    )
}
export default Tabs;