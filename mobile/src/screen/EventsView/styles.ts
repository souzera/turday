import { StyleSheet } from 'react-native';
import { rootStyles } from '../../theme/styles';

const styles = StyleSheet.create({
    ...rootStyles,
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    }
});

export default styles;