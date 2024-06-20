import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
  ...rootStyles,
  enderecoButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
},
enderecoButtonTouchable: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  enderecoButtonTextContent: {
    fontSize: THEME.FONT_SIZE.SM,
    width: "50%",
  },
});


export default styles;