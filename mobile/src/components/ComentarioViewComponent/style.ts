import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
    ...rootStyles,
    comentarioViewHeader:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        color: THEME.COLORS.DARKGRAY,
    },
    comentarioViewProfileText:{
        color: THEME.COLORS.DARKGRAY,
    },
    comentarioTextArea:{
        color: THEME.COLORS.DARKGRAY,
        backgroundColor: THEME.COLORS.LIGTHGRAY,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius:30,
    }
})

export default styles;