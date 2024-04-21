import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5,
        width: 150,
        marginHorizontal: 5,
    },
    imageContent:{
        width:150,
        height:150,
        objectFit: 'contain',
    },
    image:{
        borderRadius: 10,
        width: "auto",
        height: "100%",
    },
    titulo:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    descContainer:{
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        gap: 5,
    },
    desc: {
        fontSize: 12,
    }
})

export default styles;