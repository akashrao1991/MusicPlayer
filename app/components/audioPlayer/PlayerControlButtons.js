import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import TrackPlayer, { State } from "react-native-track-player";
import Icon from 'react-native-vector-icons/Fontisto';
import RNFetchBlob from "rn-fetch-blob";
// const RNFetchBlob = require( "rn-fetch-blob");
import { colors } from "../../common/colors";
import { getFilePath } from "../../common/functions";
import { styles } from "./styles";

async function addTrack(track){

    const local = {
        id: track.id,
        path:`${RNFetchBlob.fs.dirs.MusicDir}/${track.filename}}`,
        title: track.title,
        artist: track.artist,
        artwork: track.artwork,
    }
    // delete local.url
    
    const localFileExists = await RNFetchBlob.fs.exists(local.path)
    console.log('local============',local)
    console.log('local============',localFileExists)
    if(localFileExists)
        local.url = `file://${local.path}`
    else
        local.url = track.url

    console.log('local============',local)

    TrackPlayer.add(local);
    TrackPlayer.play();

}

export function PlayerControlButtons(props){

    const [isPlaying, setPlaying] = useState(true);

    const {
        buttonsSection,
        buttonsCol,
        playPauseButton,
        playPauseIcon,
    } = styles;

    const {onNextPrevPress,track} =props

    const onPlayPausePress = async () => {
        const state = await TrackPlayer.getState();

        if (state === State.Playing) {
            TrackPlayer.pause();
            setPlaying(false);
        }

        if (state === State.Paused) {
            TrackPlayer.play();
            setPlaying(true);
        }
    };

    useEffect(() => {
        setPlaying(true);
        // if(track.isDownloaded)
/*         const local = {
            ...track,
            url:`file://${getFilePath(track)}`,
            // uri:"file:/"+getFilePath(track)
        }
        // delete local.url
        console.log('local============',local)

        TrackPlayer.add([local]);
        TrackPlayer.play();
 */    
        addTrack(track)
}, [track]);

    useEffect(()=>{
        setPlaying(true)
    },[])


    const playOrPauseIcon = isPlaying ? 'pause' : 'play';



    return (
        <View style={buttonsSection}>
        {/*
        <View style={[buttonsCol, { alignItems: 'flex-end' }]}>
            <TouchableOpacity onPress={() => onNextPrevPress('prev')}>
                <Icon name="step-backwrad" size={18} color={colors.TINT} />
            </TouchableOpacity>
        </View>
        */}
        <View style={buttonsCol}>
            <TouchableOpacity onPress={onPlayPausePress} style={playPauseButton}>
                <Icon name={playOrPauseIcon} size={14} color={colors.BLACK} style={playPauseIcon} />
            </TouchableOpacity>
        </View>
        {/*
        <View style={[buttonsCol, { alignItems: 'flex-start' }]}>
            <TouchableOpacity onPress={() => onNextPrevPress('next')}>
                <Icon name="step-forward" size={18} color={colors.BUTTON} />
            </TouchableOpacity>
        </View>
        */}
    </View>

    )

}