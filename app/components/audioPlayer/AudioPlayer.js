import React from 'react';
import {  View } from 'react-native';
import {hasValue} from '../../common/functions'
import { styles } from './styles';
import { TrackArt } from './TrackArt';
import { TrackDescription } from './TrackDescription';
import { TrackSlider } from './TrackSlider';
import { PlayerControlButtons } from './PlayerControlButtons';
import { useSelector } from 'react-redux';

const AudioPlayer = () => {
    const {
        playerMaxView,
        topSection,
    } = styles;

    const track = useSelector(state=>state.player.currentTrack)

    if(!hasValue(track))
        return(<View />)

    return (
        <View style={playerMaxView}>

            <View style={topSection}>

                <TrackArt />

                <TrackDescription />
                
            </View>

            <TrackSlider />

            <PlayerControlButtons />

        </View>
    );
};

export default AudioPlayer;