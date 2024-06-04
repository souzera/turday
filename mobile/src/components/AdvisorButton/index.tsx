import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { THEME } from "../../theme";
import options from "../../services/api/constants/options";

export default function AdvisorButton(props: AdvisorButtonProps) {
  // STATES

  // LIFECYCLE

  // METHODS

  const validateAvatar = (avatar: string) => {
    return avatar.startsWith("/uploads")
      ? `${options.API_URL}${avatar.substring(1)}`
      : avatar;
  };

  props.avatar && console.log(validateAvatar(props.avatar));

  const handleChat = () => {
    console.log(
      `Chat to advisor ${props.nome}: Send message to ${props.contato}`
    );
  };

  return (
    <View>
      <View style={styles.advisorButtonContainer}>
        <View style={styles.advisorButtonProfile}>
          <View>
            {props.avatar ? (
              <Image
                source={{ uri: validateAvatar(props.avatar) }}
                style={styles.avatar}
              />
            ) : (
              <View style={styles.voidAvatar}>
                <FontAwesome
                  name="image"
                  size={24}
                  color={THEME.COLORS.LIGTHGRAY}
                />
              </View>
            )}
          </View>

          <View>
            <Text style={styles.text}>{props.nome}</Text>
            <Text style={styles.text}>{props.contato}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={handleChat}>
            <Ionicons
              name="chatbubble-ellipses"
              size={32}
              color={THEME.COLORS.DARKGRAY}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
