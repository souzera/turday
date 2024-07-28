import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { rootStyles } from '../../theme/styles';

const styles = StyleSheet.create({
    ...rootStyles,
    listItemContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width:"100%",
        padding: 10,
        gap: 5,
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
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: 'bold',
    },
    descContainer:{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    desc: {
        fontSize: 12,
    },
    
})

export default styles;