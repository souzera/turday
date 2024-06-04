import { StyleSheet} from "react-native";
import { THEME } from "../../theme";
import { rootStyles } from "../../theme/styles";

export const styles = StyleSheet.create({
    ...rootStyles,
    header:{
        marginTop: '20%',
    },
    div:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator:{
        height: 10,
    },
    inputGroup:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: THEME.COLORS.LIGTHGRAY,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: '80%',
    },
    input:{
        width: '80%',
        height: 40,
        borderRadius: 5,
        padding: 10,
    }
});