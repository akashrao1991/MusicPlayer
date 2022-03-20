import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux';
import { colors } from '../../common/colors';
import { hasValue } from '../../common/functions';
import { deleteDownload, download } from '../../store/Download';
import { setCurrentTrack } from '../../store/playerReducer';
import { store } from '../../store/store';
import {styles} from './styles';

export const SongItem = (props) =>{ 

    const {item} = props

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


    // const {selectedTrack,setSelectedTrack} = props
    // const selectedTrack = useSelector(state=>state.player.currentTrack)

    const artImg = item.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`;

    const isDownloaded    = item.isDownloaded === true
    const isNotDownloaded = item.isDownloaded === false
    const selectedTrack = useSelector(state=>state.player.currentTrack)

    let highlightStyle = {};
    if (hasValue(selectedTrack) && selectedTrack.id === item.id)
        highlightStyle = { backgroundColor: colors.HIGHLIGHT_BACKGROUND }
    
    const onTrackItemPress = async (track) => {
        console.log('***************************',track)
        store.dispatch(setCurrentTrack(track))
    }
    


    const onDownloadPress = async(event)=>{
        console.log('-------------------',item)
        store.dispatch(download(item))
    }

    const onDeleteDownload = async(event)=>{
        store.dispatch(deleteDownload(item))
    }


    return (
        <View >


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
            { isNotDownloaded && 
            <TouchableOpacity onPress={(event)=>onDownloadPress(event)} style={{ justifyContent: 'center',alignItems: 'center',}} >
            <Icon name={'cloud-download'} size={30} style={{opacity:0.7}}  color={colors.BLACK}  />
        </TouchableOpacity>
            }
            { isDownloaded && 
            <TouchableOpacity onPress={(event)=>onDeleteDownload(event)} style={{ justifyContent: 'center',alignItems: 'center',}}>
            <Icon name={'file-download-done'} style={{opacity:0.7}} size={30} color={colors.BLACK}  />
        </TouchableOpacity>
            }

        </TouchableOpacity>
        <View style={{alignSelf:'center',width:'90%',opacity:0.4,height:1,backgroundColor:colors.BLACK}}  />

        </View>

    )
}




