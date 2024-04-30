import { StyleSheet } from "react-native";
import { rootStyles } from "../../theme/styles";


//TODO: Testa generalização do estilo

export const styles = StyleSheet.create({...rootStyles,
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
})