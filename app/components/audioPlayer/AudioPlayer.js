import React from 'react';
import {  View } from 'react-native';
import {hasValue} from '../../common/functions'
import { styles } from './styles';
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