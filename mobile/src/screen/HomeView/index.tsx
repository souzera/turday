import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native"
import { styles } from "./styles"


const HomeView = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeView</Text>
        </SafeAreaView>
    )
}

export default HomeView