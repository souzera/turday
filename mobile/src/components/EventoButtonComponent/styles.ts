import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

const styles = StyleSheet.create({
    ...rootStyles,
    eventoButtonImage: {
        width: 160,
        height: 120,
        borderRadius: 24,
    },
    eventoButtonTitle:{
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'bold',
    },
    eventoButtonDescription:{
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.DARKGRAY,
    },
})

export default styles;