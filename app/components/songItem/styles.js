import { StyleSheet } from "react-native";
import { colors } from "../../common/colors";
import { scale, verticalScale } from "../../common/scaling";
import { circleStyle } from "../../common/styles";

export const styles = StyleSheet.create({
    itemStyle: {
        marginTop: verticalScale(10),
        // marginHorizontal: scale(8),
        paddingHorizontal: scale(8),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        height: verticalScale(80),
        borderBottomColor: colors.BORDER,
        borderWidth: 0,
    },
    trackImgBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    trackDescBox: {
        flex: 5,
        paddingLeft: scale(10),
        marginLeft: scale(5),
        borderRadius: 5,
        display: 'flex',
    },
    trackImg: {
        ...circleStyle(50),
    },
    titleBox: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginTop: verticalScale(2),
    },
    subTitleBox: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: scale(18),
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: scale(15),
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

});