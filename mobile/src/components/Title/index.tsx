import { View, Image, Text } from 'react-native'
import { styles } from './styles'

export const TurdayTitle = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{uri:'https://raw.githubusercontent.com/souzera/turday/main/mobile/src/assets/logo.png'}}/>
            <Text style={styles.title}> TURDAY</Text>
        </View>
    )
}

