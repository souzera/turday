import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { rootStyles } from '../../theme/styles';

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
    },
    modalContent:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90%',
        height: '100%',
    },
    modalHeader:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        marginTop: 20,
        gap: 20,
    },
    modalHeaderTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME.COLORS.DARKGRAY,
    }
})

export default styles;