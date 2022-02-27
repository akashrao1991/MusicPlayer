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

const AudioPlayer = (props) => {
    const {
        playerMaxView,
        topSection,
    } = styles;

    const { track } = props

    if(!hasValue(track))
        return(<View />)

    return (
        <View style={playerMaxView}>

            <View style={topSection}>

                <TrackArt track ={track}/>

                <TrackDescription track={track} />
                
            </View>

            <TrackSlider track={track} />

            <PlayerControlButtons {...props} />

            </View>
    );
};

export default AudioPlayer;