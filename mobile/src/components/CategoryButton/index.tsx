import { View, Text, TouchableOpacity } from "react-native";
import { CategoryButtonProps } from "./interface";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";

export default function CategoryButton(props: CategoryButtonProps) {

  // STATES

  // LIFECYCLE

  // METHODS

  const onPressButton = () => {
    console.log(`Clicou no botão ${props.nome.toUpperCase()}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
      <View style={styles.row}>
        {props.icon ? <FontAwesome name={props.icon} size={20} color={THEME.COLORS.DARKGRAY}/> : null}
        <Text style={styles.text}>{props.nome}</Text>
      </View>
    </TouchableOpacity>
  );
}
