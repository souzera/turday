import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  ...rootStyles,
  detailsInfoContainer: {
    padding: 20,
  },
  titleDetailsInfo: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
  },
  descriptionDetailsInfo: {
    fontSize: THEME.FONT_SIZE.SM,
  },
  linkStyle: {
    color: "blue",
    textDecorationLine: "underline",
    cursor: "pointer", 
  },
});

export default styles;
