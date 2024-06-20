import { View, Text } from "react-native";
import { DetailsInfoComponentsProps } from "./interface";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";

export function DetailsInfoComponents(props: DetailsInfoComponentsProps) {
  console.log("DetailsInfoComponents", props);

  return (
    <View style={styles.row}>
      {props.icon && ( 
          <View>
          <FontAwesome
            // @ts-ignore
            name={props.icon}
            size={32}
            color={THEME.COLORS.DARKGRAY}
          />
        </View>
      )}

      <View>
        <Text style={styles.titleDetailsInfo}>{props.title}</Text>
        <Text style={styles.descriptionDetailsInfo}>{props.description}</Text>
      </View>
    </View>
  );
}
