import { ActivityIndicator, View } from "react-native"
import { styles } from "./styles"
import { THEME } from "../../theme"

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={THEME.COLORS.DARK}/>
        </View>
    )
}

export default Loading