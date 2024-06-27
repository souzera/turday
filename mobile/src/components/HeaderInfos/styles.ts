import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
    },
    row:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    column:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    info:{
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: THEME.COLORS.DARKGRAY,
    },
    link:{
        fontSize: THEME.FONT_SIZE.XS,
        color: THEME.COLORS.LIGTHGRAY,
    }
});

export default styles;