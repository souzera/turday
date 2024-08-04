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
  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  collumn: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
  },
  modalContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: 40,
    gap: 20,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    textAlign: "left",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginTop: 20,
    padding: 0,
  },
  modalHeaderTitle: {
    textAlign: "center",
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.DARKGRAY,
    width: "80%"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: THEME.COLORS.LIGTHGRAY,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "80%",
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    padding: 10,
  },
});
