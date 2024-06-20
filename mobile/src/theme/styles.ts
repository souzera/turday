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
    //TODO: REMOVER O BACKGROUND COLOR
    //backgroundColor: THEME.COLORS.INFO,
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
  //TODO: corrigir borda superior do modal
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: 50,
    marginTop: 20,
    gap: 20,
    padding: 0,
  },
  modalHeaderTitle: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.DARKGRAY,
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
