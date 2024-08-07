import { View, Text, Linking } from "react-native";
import { DetailsInfoComponentsProps } from "./interface";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { THEME } from "../../theme";
import verifyTextIsLink from "../../util/verifyTextIsLink";
import verifyTextIsEmail from "../../util/verifyTextIsEmail";

export function DetailsInfoComponents(props: DetailsInfoComponentsProps) {

  const removePrefix = (link: string) => {
    const prefixes  = ["http://", "https://"];
    let selected = prefixes.find(prefix => link.includes(prefix));
    let removePrefix = link;
    if(selected){
      removePrefix = link.replace(selected, '');
    }
    return removePrefix;
  }

  const openLink =  async () => {

    if (verifyTextIsEmail(props.description)) {
      await Linking.openURL(`mailto:${props.description}`);
      return;
    }

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
          <Text onPress={openLink} style={{...styles.descriptionDetailsInfo, ...styles.linkStyle}}>{removePrefix(props.description)}</Text>
        ) : 
        (
          <Text style={styles.descriptionDetailsInfo}>{props.description}</Text>
        )}
      </View>
    </View>
  );
}
