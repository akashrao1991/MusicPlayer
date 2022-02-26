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
import styles from './styles';
// import TrackPlayer from 'react-native-track-player';
// import { tracks } from './tracks';
// import AppPlayer from './AppPlayer';
// import AudioPlayer from './AudioPlayer';



// const { verticalScale } = scaling;

/*const renderItem = ({ item }) => {

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
    } = styles;



    const [selectedTrack, setSelectedTrack] = useState(null);

    const onTrackItemPress = async (track) => {
        await TrackPlayer.stop();
        await TrackPlayer.reset();
        setSelectedTrack(track);
    };

    const artImg = item.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`;

    let highlightStyle = {};
    if (selectedTrack && selectedTrack.id === item.id)
        highlightStyle = { backgroundColor: '#d1d1e0' };

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
    );
};

*/
export function TracksList(props) {
    const {
        container,
        listBox,
        playerBox,
    } = styles;

    // state vars

    // useEffect(() => {
    //     AppPlayer.initializePlayer();
    // }, []);


    // const playNextPrev = async (prevOrNext) => {
    //     const currentTrackId = await TrackPlayer.getCurrentTrack();
    //     if (!currentTrackId) return;
    //     const trkIndex = tracks.findIndex(trk => trk.id === currentTrackId);

    //     if (prevOrNext === 'next' && trkIndex < tracks.length - 1) {
    //         onTrackItemPress(tracks[trkIndex + 1]);
    //     }
    //     if (prevOrNext === 'prev' && trkIndex > 0) {
    //         onTrackItemPress(tracks[trkIndex - 1]);
    //     }
    // };

    

    // let listBoxStyle = {};
    // if (selectedTrack) listBoxStyle = { paddingBottom: 280 };
    // return (
    //     <SafeAreaView >
    //         <View >
    //             {/*<FlatList data={tracks} keyExtractor={item => item.id} />
    //             {/*<FlatList data={tracks} renderItem={renderItem} keyExtractor={item => item.id} />
    // */}
    //         </View>
    //         {
    //             <View >
    //                 {/*<AudioPlayer track={selectedTrack}  /> */}
    //                 {/*<AudioPlayer track={selectedTrack} onNextPrevPress={playNextPrev} /> */}
                    
    //             </View>
    //         }
    //     </SafeAreaView>
    // )
    return (
        <SafeAreaView>
        
        </SafeAreaView>
    )

}
