import { StyleSheet } from "react-native";
import { circleStyle } from "../../common/styles";

export const styles = StyleSheet.create({
    itemStyle: {
        marginTop: 10,
        marginHorizontal: 8,
        paddingHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        height: 80,
        borderBottomColor: '#333',
        borderWidth: 0,
    },
    listBox: {
        height: '100%',
    },
    subTitleBox: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleBox: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginTop: 2,
    },
    trackImg: {
        ...circleStyle(50),
    },
    trackImgBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },   
    trackDescBox: {
        flex: 5,
        paddingLeft: 10,
        marginLeft: 5,
        borderRadius: 5,
        display: 'flex',
    },


});