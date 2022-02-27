import React from "react"
import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const TrackDescription = (props) => {

    const {
        trackDesc,
        trackSubtitle,
        trackTitle
    } = styles

    const track = props.track
    return (
        <View style={trackDesc}>
            <View>
                <Text style={trackTitle} adjustsFontSizeToFit>{track.title}</Text>
            </View>
            <View>
                <Text style={trackSubtitle}>
                    {track.artist || track.album || 'unknown'}
                </Text>
            </View>
        </View>
    )

}