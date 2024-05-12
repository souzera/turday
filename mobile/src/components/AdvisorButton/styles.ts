import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({...rootStyles,
    panel:{
        ...rootStyles.row,
        backgroundColor: THEME.COLORS.LIGTHGRAY,
        padding: 20,
        width: 260,
        borderRadius: 30,
    },
    voidAvatar:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: THEME.COLORS.DARKGRAY
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 50
    },
    text:{
        color: THEME.COLORS.DARKGRAY
    }
});

export default styles;