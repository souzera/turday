import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  ...rootStyles,
  advisorButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: THEME.COLORS.LIGTHGRAY,
    padding: 20,
    width: '100%',
    borderRadius: 30,
  },
  advisorButtonProfile:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  voidAvatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.DARKGRAY,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    color: THEME.COLORS.DARKGRAY,
  },
});

export default styles;
