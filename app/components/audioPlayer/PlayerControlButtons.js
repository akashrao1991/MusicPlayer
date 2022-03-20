import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import TrackPlayer, { State } from "react-native-track-player";
import Icon from 'react-native-vector-icons/Fontisto';
import { useSelector } from "react-redux";
import RNFetchBlob from "rn-fetch-blob";
// const RNFetchBlob = require( "rn-fetch-blob");
import { colors } from "../../common/colors";
import { getFilePath } from "../../common/functions";
import { setCurrentTrack, togglePlaying } from "../../store/playerReducer";
import { store } from "../../store/store";
import { styles } from "./styles";


export function PlayerControlButtons(props){

    // const [isPlaying, setPlaying] = useState(true);

    const {
        buttonsSection,
        buttonsCol,
        playPauseButton,
        playPauseIcon,
    } = styles;

    // const {onNextPrevPress,track} =props
    const track = useSelector(state=>state.player.currentTrack)
    const isPlaying = useSelector(state=>state.player.isPlaying)

/*     const onPlayPausePress = async () => {
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
 */
/*     useEffect(() => {
        setPlaying(true);
}, [track]);

    useEffect(()=>{
        setPlaying(true)
    },[])
 */

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
            <TouchableOpacity onPress={()=>store.dispatch(togglePlaying())} style={playPauseButton}>
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