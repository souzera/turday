import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 64,
        height: 64,
        objectFit: 'contain',
        marginBottom: 20,
    },
    title:{
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '900',
    }

})