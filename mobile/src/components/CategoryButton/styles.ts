import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.LIGTHGRAY,
        padding: 20,
        borderRadius: 20,
        width: '100%',
    },
    row:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    text:{
        color: THEME.COLORS.DARKGRAY,
        fontSize: 20,
    }
});

export default styles;