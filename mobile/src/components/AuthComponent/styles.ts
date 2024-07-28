import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
    ...rootStyles,
    authContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'90%'
    },
    authTitle:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    authFormInput:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width:'100%'
    },
    authError:{
        color: THEME.COLORS.DANGER,
    },
    authButton:{
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        width: "70%"
    }
});

export default styles;