import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    ...rootStyles,
    collumnDetailsView: {
        width: "100%",
    },
    imageDetailsView: {
        width: '100%',
        height: 260,
    },
    titleDetailsView: {
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: "bold",
    },
    descriptionDetailsView: {
        fontSize: THEME.FONT_SIZE.MD,
    },
});