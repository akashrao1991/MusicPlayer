import { StyleSheet } from "react-native";
import { colors } from "../../common/colors";
import {styles as commonStyles} from "../../common/styles";
export const styles = StyleSheet.create({

    content: {
        flex: 8,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: colors.APP_LIGHT_BACKGROUND,
    },

    container: {
        flex: 1,
    },
    listBox: {
        height: '100%',
    },
    playerBox: {
        position: 'absolute',
        zIndex: 10,
        height: '50%',
        width: '100%',
        bottom: 0,
    },

})

