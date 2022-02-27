import Slider from "@react-native-community/slider"
import React, { useEffect, useState } from "react"
import { Image, Text, View } from "react-native"
import TrackPlayer, { useProgress } from "react-native-track-player"
import { colors } from "../../common/colors"
import { AppPlayer } from "../../player/AppPlayer"
import { styles } from "./styles"

const playerSeekTo = async (value) => {
    const seconds = parseInt(value);
    console.log(`seconds : ${seconds}    position :${await TrackPlayer.getPosition()}`);
    // await TrackPlayer.stop();
    // console.log(`state : ${await TrackPlayer.getState()}`)
    await TrackPlayer.pause();
    await TrackPlayer.seekTo(value);

    await TrackPlayer.play();
    // console.log(`state : ${await TrackPlayer.getState()}`)
    // console.log(`state : ${await TrackPlayer.getState()}`)

    console.log(`position :${await TrackPlayer.getPosition()}`);
    // console.log(`state : ${await TrackPlayer.getState()}`)
 
}

export const TrackSlider = (props) => {

    const progress = useProgress()

    const {
        progressBarSection,
    } = styles

    const [seekValue,setSeekValue] = useState(0)

    useEffect(()=>{
        playerSeekTo(seekValue)
    },[seekValue])

    const track = props.track
    return (
        <View style={progressBarSection}>
            <Text>{AppPlayer.secondsToHHMMSS(Math.floor(progress.position || 0))}</Text>
            <Slider
                style={{ width: '70%', height: 40 }}
                minimumValue={0}
                maximumValue={track.duration}
                minimumTrackTintColor={colors.TINT}
                maximumTrackTintColor={colors.TINT}
                thumbTintColor={colors.TINT}
                value={progress.position}
                disabled={true}
                // onSlidingComplete={async (value) =>{
                //     setSeekValue(value)
                // }}
            />
            <Text>{AppPlayer.secondsToHHMMSS(track.duration || 0)}</Text>
        </View>
    )

}