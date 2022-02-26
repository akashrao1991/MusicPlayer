import { StyleSheet } from "react-native";
import { colors } from "../../common/colors";
import { circleStyle, flexStyles } from "../../common/styles";


export const styles = StyleSheet.create({

    playerMaxView: {
        ...flexStyles,
        backgroundColor: colors.POPUP_PLAYER_BACKGROUND,
        paddingHorizontal: 5,
        height: 300,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    topSection: {
        ...flexStyles,
        flex: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },

    buttonsSection: {
        ...flexStyles,
        flex: 2,
        flexDirection: 'row',
    },

    progrsBarSection: {
        ...flexStyles,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    buttonsCol: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },

    playPauseButton: {
        ...circleStyle(60),
        backgroundColor: colors.TINT,
    },

    playPauseIcon: {
        color: colors.WHITE,
    },

    trackArtBox: {
        ...flexStyles,
        flex: 2,
        display: 'flex',
    },

    trackArt: {
        ...circleStyle(90),
        borderWidth: 2,
    },

    trackDesc: {
        ...flexStyles,
        alignItems: 'center',
        justifyContent: 'center',
    },

    trackTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.TEXT_DARK,
    },

    trackSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.TEXT_DARK,
    },

})