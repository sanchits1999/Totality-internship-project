import React from "react"
import { View, Image, Text } from "react-native"

const FeaturedImage = (props) => {
    return (
        <View style={{ flex: 1 , alignItems : "center"}}>
            <Image source={props.uri} style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 20 , width : "93%"}} />
        </View>
    )
}

export default FeaturedImage