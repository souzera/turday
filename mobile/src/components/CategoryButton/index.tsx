import { View, Text, TouchableOpacity } from "react-native";
import { CategoryButtonProps } from "./interface";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";

export default function CategoryButton({nome, icon, ...rest}: CategoryButtonProps) {

  // STATES

  // LIFECYCLE

  // METHODS

  return (
    <TouchableOpacity style={styles.container}{...rest}>
      <View style={styles.row}>
        {icon ? <FontAwesome name={icon} size={20} color={THEME.COLORS.DARKGRAY}/> : null}
        <Text style={styles.text}>{nome}</Text>
      </View>
    </TouchableOpacity>
  );
}
