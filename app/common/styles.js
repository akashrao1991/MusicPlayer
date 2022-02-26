import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const flexStyles = {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
};

export const circleStyle= (heightWidth) => ({
    borderRadius: heightWidth / 2,
    width: heightWidth,
    height: heightWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        display: 'flex',
        backgroundColor: 'black',
    },
    content: {
        flex: 8,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: colors.APP_LIGHT_BACKGROUND,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.APP_HEADER_TEXT_COLOR,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.TEXT_LIGHT,
    },

});

