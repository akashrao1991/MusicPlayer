import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ListRenderItem,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { AppPlayer } from '../appPlayer/AppPlayer';
import AudioPlayer from '../audioPlayer/AudioPlayer';
import { SongItem } from '../songItem/SongItem';
import styles from '../../new-app/styles';
import { tracks } from './tracks';
import { verticalScale } from '../../common/scaling';

export function TracksList(props) {
    const {
        container,
        listBox,
        playerBox,
    } = styles;

    // state vars

    useEffect(() => {
        AppPlayer.initializePlayer();
    }, []);

    const [selectedTrack, setSelectedTrack] = useState(null)

    let listBoxStyle = {};
    if (selectedTrack)
        listBoxStyle = { paddingBottom: verticalScale(280) }

    const playNextPrev = async (prevOrNext) => {
        const currentTrackId = await TrackPlayer.getCurrentTrack();
        if (!currentTrackId) return;
        const trkIndex = tracks.findIndex(trk => trk.id === currentTrackId);

        if (prevOrNext === 'next' && trkIndex < tracks.length - 1) {
            onTrackItemPress(tracks[trkIndex + 1]);
        }
        if (prevOrNext === 'prev' && trkIndex > 0) {
            onTrackItemPress(tracks[trkIndex - 1]);
        }
    };


    return (
        <SafeAreaView style={container}>
            <View style={[listBox, listBoxStyle]}>
                <FlatList data={tracks} renderItem={SongItem({ selectedTrack, setSelectedTrack })} keyExtractor={item => item.id} />
            </View>
            <View style={playerBox}>
                <AudioPlayer track={selectedTrack} onNextPrevPress={playNextPrev} />
            </View>
        </SafeAreaView>
    )

}
