import { StyleSheet } from "react-native";
import { THEME } from "../../theme";
import { rootStyles } from "../../theme/styles";

export const styles = StyleSheet.create({
    ...rootStyles,
    main:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '95%',
        paddingHorizontal: 20,
        gap:20,
    },
    header:{
        marginTop: '20%',
    },
    horizontalDivider:{
        borderBottomColor: THEME.COLORS.LIGTHGRAY,
        borderBottomWidth: 1,
        width: '90%',
    },
    separator:{
        height: 10,
    },

});