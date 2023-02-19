import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
const Item = ({ title, item, onSelected, styleSheet }) => {
  return (
    <TouchableOpacity style={styleSheet} onPress={() => onSelected(item)}>
      <Text style={styles.itemList}>{title}</Text>
      {styleSheet == !styles.itemContainer ? (
        <Image
          style={styles.logo}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};
export default Item;
