import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '20%',
        alignItems: 'center',
        height: '100%',
        gap: 20,
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
    },
    mapContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
    }
})