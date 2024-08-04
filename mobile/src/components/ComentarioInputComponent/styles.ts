import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
    ...rootStyles,
    comentarioInputContainer:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems:"flex-end",
        width: "100%",
    },
    comentarioTextInput:{
        width: "100%",
        backgroundColor: THEME.COLORS.LIGTHGRAY,
        color: THEME.COLORS.DARKGRAY,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius:20,
    },
    comentarioInputButton:{
        backgroundColor: THEME.COLORS.LIGTHGRAY,
        color: THEME.COLORS.DARKGRAY,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    comentarioInputLoginButton:{
        backgroundColor: THEME.COLORS.LIGTHGRAY,
        color: THEME.COLORS.DARKGRAY,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        opacity: 0.5,
    }
})

export default styles;