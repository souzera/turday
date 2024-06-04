import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  ...rootStyles,
  titleHomeView: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.DARKGRAY,
    fontWeight: "bold",
  },
});
