import { StyleSheet } from "react-native"
import { rootStyles } from "../../theme/styles"
import { THEME } from "../../theme"

const styles = StyleSheet.create({
    ...rootStyles,
    detailsInfoContainer:{
        padding: 20,
    },
    titleDetailsInfo: {
        fontSize: THEME.FONT_SIZE.MD
    },
    descriptionDetailsInfo: {
        fontSize: THEME.FONT_SIZE.SM
    }
})

export default styles