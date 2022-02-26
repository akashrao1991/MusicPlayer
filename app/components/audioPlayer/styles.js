import { StyleSheet } from "react-native";
import { circleStyle, flexStyles } from "../../common/styles";


export const styles = StyleSheet.create({

    playerMaxView: {
        ...flexStyles,
        backgroundColor: '#a3a3c2',
        paddingHorizontal: 5,
        height: 300,
        shadowColor: '#000',
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
        backgroundColor: '#52527a',
    },

    playPauseIcon: {
        color: '#fff',
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
        color: '#3d3d5c',
    },

    trackSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3d3d5c',
    },

})