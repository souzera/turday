import { StyleSheet} from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    ...rootStyles,
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    view:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '80%',
        gap: 20,
    },
    title: {
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'bold',
        color: THEME.COLORS.DARKGRAY,
    },
});