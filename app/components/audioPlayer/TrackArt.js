import React from "react"
import { Image, View } from "react-native"
import { styles } from "./styles"

export const TrackArt = (props) =>{

    const{
        trackArtBox,
        trackArt
    } = styles

    const artImage = props.artImage
    return (
        <View style={trackArtBox}>
            {/*
            <Image style={trackArt} source={{ uri: artImage }} />
            */}
            <Image style={trackArt} source={{ uri: artImage }} />

        </View>
    )

}