import React from "react"
import { Image, View } from "react-native"
import { useSelector } from "react-redux"
import { styles } from "./styles"

export const TrackArt = (props) =>{

    const{
        trackArtBox,
        trackArt
    } = styles




    // const artImage = props.track.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`
    const artImage = useSelector(state=>{
        const track = state.player.currentTrack
        return track.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`
    })
    
    return (
        <View style={trackArtBox}>
            <Image style={trackArt} source={{ uri: artImage }} />
        </View>
    )

}