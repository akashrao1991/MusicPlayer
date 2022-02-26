import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import styles from '../../new-app/styles';

export const SongItem = (props) => ({item}) => {

    const {
        container,
        itemStyle,
        listBox,
        playerBox,
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
    if (selectedTrack && selectedTrack.id === item.id)
        highlightStyle = { backgroundColor: '#d1d1e0' }
    
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
                    <Text style={title}>{item.title}</Text>
                </View>
                <View style={subTitleBox}>
                    <Text style={subTitle}>{item.artist || item.album || 'Unknown'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}




