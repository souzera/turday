import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { rootStyles } from '../../theme/styles';

const styles = StyleSheet.create({
    ...rootStyles,
    listItemContainer:{
        flex:1,
        width: 180,
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
    
})

export default styles;