import React from "react"
import { Image, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { styles } from "./styles"

export const TrackDescription = (props) => {

    const {
        trackDesc,
        trackSubtitle,
        trackTitle
    } = styles

    // const track = props.track
    const track = useSelector(state=>state.player.currentTrack)
    
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