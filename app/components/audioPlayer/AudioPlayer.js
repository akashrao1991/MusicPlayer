import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer, { State, useProgress, useTrackPlayerProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Fontisto';
import {hasValue} from '../../common/functions'
import { AppPlayer } from '../../player/AppPlayer';
import { styles } from './styles';
import { colors } from '../../common/colors';
import { TrackArt } from './TrackArt';
import { TrackDescription } from './TrackDescription';
import { TrackSlider } from './TrackSlider';
import { PlayerControlButtons } from './PlayerControlButtons';

const AudioPlayer = ({ track, onNextPrevPress }) => {
    const {
        playerMaxView,
        topSection,
    } = styles;

    const [isPlaying, setPlaying] = useState(true);

    useEffect(() => {
        setPlaying(true);
        TrackPlayer.add(track);
        TrackPlayer.play();
    }, [track]);

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


    if(!hasValue(track))
        return(<View></View>)
    

    // let artImg = null
    // if(hasValue(track) && hasValue(track.artwork) )
    //     artImg = track.artwork
    // else
    //     artImg = `https://picsum.photos/150/200/?random=${Math.random()}`;

    const artImg = track.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`


    const playOrPauseIcon = isPlaying ? 'pause' : 'play';
    return (
        <View style={playerMaxView}>

            <View style={topSection}>

                <TrackArt artImage={artImg} />

                <TrackDescription track={track} />
                
            </View>

            <TrackSlider track={track} />

            <PlayerControlButtons onNextPrevPress={onNextPrevPress} track={track}/>

            </View>
    );
};

export default AudioPlayer;