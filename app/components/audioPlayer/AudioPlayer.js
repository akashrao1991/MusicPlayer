import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer, { useProgress, useTrackPlayerProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Fontisto';
import {hasValue} from '../../common/functions'
import { AppPlayer } from '../../player/AppPlayer';
import { styles } from './styles';
import { colors } from '../../common/colors';
import { TrackArt } from './TrackArt';

const AudioPlayer = ({ track, onNextPrevPress }) => {
    const {
        playerMaxView,
        topSection,
        buttonsSection,
        progrsBarSection,
        buttonsCol,
        playPauseButton,
        playPauseIcon,
        trackArtBox,
        trackArt,
        trackDesc,
        trackTitle,
        trackSubtitle,
    } = styles;

    const progress = useProgress()
    const [isPlaying, setPlaying] = useState(true);

    useEffect(() => {
        setPlaying(true);
        TrackPlayer.add(track);
        TrackPlayer.play();
    }, [track]);

    const onPlayPausePress = async () => {
        const state = await TrackPlayer.getState();

        if (state === TrackPlayer.STATE_PLAYING) {
            TrackPlayer.pause();
            setPlaying(false);
        }

        if (state === TrackPlayer.STATE_PAUSED) {
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
                <View style={trackDesc}>
                    <View>
                        <Text style={trackTitle}>{track.title}</Text>
                    </View>
                    <View>
                        <Text style={trackSubtitle}>
                            {track.artist || track.album || 'unknown'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={progrsBarSection}>
                <Text>{AppPlayer.secondsToHHMMSS(Math.floor(progress.position || 0))}</Text>
                <Slider
                    style={{ width: '70%', height: 40 }}
                    minimumValue={0}
                    maximumValue={track.duration}
                    minimumTrackTintColor={colors.TINT}
                    maximumTrackTintColor={colors.TINT}
                    thumbTintColor={colors.TINT}
                    value={progress.position}
                />
                <Text>{AppPlayer.secondsToHHMMSS(track.duration || 0)}</Text>
            </View>
            <View style={buttonsSection}>
                <View style={[buttonsCol, { alignItems: 'flex-end' }]}>
                    <TouchableOpacity onPress={() => onNextPrevPress('prev')}>
                        <Icon name="step-backwrad" size={18} color={colors.TINT} />
                    </TouchableOpacity>
                </View>
                <View style={buttonsCol}>
                    <TouchableOpacity onPress={onPlayPausePress} style={playPauseButton}>
                        <Icon name={playOrPauseIcon} size={14} color={colors.BLACK} style={playPauseIcon} />
                    </TouchableOpacity>
                </View>
                <View style={[buttonsCol, { alignItems: 'flex-start' }]}>
                    <TouchableOpacity onPress={() => onNextPrevPress('next')}>
                        <Icon name="step-forward" size={18} color={colors.BUTTON} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AudioPlayer;