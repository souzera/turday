import { View, Text, Linking } from "react-native";
import { DetailsInfoComponentsProps } from "./interface";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import verifyTextIsLink from "../../util/verifyTextIsLink";

export function DetailsInfoComponents(props: DetailsInfoComponentsProps) {
  console.log("DetailsInfoComponents", props);

  const openLink =  async () => {
    await Linking.openURL(props.description);
  };

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
        {verifyTextIsLink(props.description) ? 
        (
          <Text onPress={openLink} style={{...styles.descriptionDetailsInfo, ...styles.linkStyle}}>{props.description}</Text>
        ) : 
        (
          <Text style={styles.descriptionDetailsInfo}>{props.description}</Text>
        )}
      </View>
    </View>
  );
}
