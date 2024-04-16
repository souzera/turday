import { View, Text } from "react-native"
import styles from "./styles"

export function HeaderInfo(){
    return (
        <View style={styles.container}>
            <View>
                <Text>Localização</Text>
            </View>

            
            <View>
                <Text>Clima</Text>
            </View>
        </View>
    )
}