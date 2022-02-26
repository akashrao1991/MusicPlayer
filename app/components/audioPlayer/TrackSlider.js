import Slider from "@react-native-community/slider"
import React from "react"
import { Image, Text, View } from "react-native"
import { useProgress } from "react-native-track-player"
import { colors } from "../../common/colors"
import { AppPlayer } from "../../player/AppPlayer"
import { styles } from "./styles"

export const TrackSlider = (props) => {

    const progress = useProgress()

    const {
        progressBarSection,
    } = styles

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
            />
            <Text>{AppPlayer.secondsToHHMMSS(track.duration || 0)}</Text>
        </View>
    )

}