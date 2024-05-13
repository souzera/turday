import { StyleSheet } from "react-native";
import { THEME } from ".";

export const rootStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    gap: 20,
  },
  row:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  collumn:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
  },
  modalContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: "90%",
    height: "100%",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    height: 50,
    paddingVertical: 10,
    marginTop: 50,
    gap: 20,
  },
  modalHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.DARKGRAY,
  },
});
