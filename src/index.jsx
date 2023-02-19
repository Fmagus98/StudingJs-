import { Text, View,Button} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import colors from "./components/constants/colors/index";
import AppNavigator from "./navigation/index"
import StartLogo from "./components/startLogo/StartLogo";
const App = () => {
  const [button, setButton] = useState(true);
const dismountStartLogo= async()=>{
    setTimeout(()=>{
      setButton(false)
    },4000)
}
  useEffect(()=>{
   dismountStartLogo()
  },[])
  return (
    <View style={styles.container}>
      {button ? <StartLogo /> :<AppNavigator/>}
    </View>
  );
};

export default App;
