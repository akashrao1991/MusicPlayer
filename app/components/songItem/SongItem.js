import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { colors } from '../../common/colors';
import { hasValue } from '../../common/functions';
import {styles} from './styles';

export const SongItem = (props) => ({item}) => {

    const {
        itemStyle,
        subTitle,
        subTitleBox,
        title,
        titleBox,
        trackImg,
        trackImgBox,
        trackDescBox,
    } = styles


    const {selectedTrack,setSelectedTrack} = props
    const artImg = item.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`;

    let highlightStyle = {};
    if (hasValue(selectedTrack) && selectedTrack.id === item.id)
        highlightStyle = { backgroundColor: colors.HIGHLIGHT_BACKGROUND }
    
    const onTrackItemPress = async (track) => {
        await TrackPlayer.stop();
        await TrackPlayer.reset();
        setSelectedTrack(track);
    }
    



    return (
        <TouchableOpacity
            onPress={() => onTrackItemPress(item)}
            style={[itemStyle, highlightStyle]}>
            <View style={trackImgBox}>
                <Image style={trackImg} source={{ uri: artImg }} />
            </View>
            <View style={trackDescBox}>
                <View style={titleBox}>
                    <Text style={title} adjustsFontSizeToFit>{item.title}</Text>
                </View>
                <View style={subTitleBox} adjustsFontSizeToFit>
                    <Text style={subTitle}>{item.artist || item.album || 'Unknown'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}




