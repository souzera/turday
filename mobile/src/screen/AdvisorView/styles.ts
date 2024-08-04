import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    ...rootStyles,
    advisorViewContainer: {
        width: "100%",
        height: "100%",
        gap: 20,
        padding: 0,
        backgroundColor: THEME.COLORS.SUCCESS,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
})