import { TouchableOpacity, Text } from "react-native";
import {styles} from "./style";
import { useNavigation } from '@react-navigation/native'
const Item = ({name,goTo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() =>  navigation.navigate({goTo})}>
      <Text style={styles.itemList}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Item;
