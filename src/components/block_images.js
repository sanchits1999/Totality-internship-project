import React from "react"
import { View, Image, Text } from "react-native"

const BlockImage = (props) => {
    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <Image source={props.uri} style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 20 }} />
            <View style={{ position: "absolute", left: 20, bottom: 0 }}>
                <Text style={{ color: "#dddddd", fontSize: 16, fontWeight: "700", marginBottom: 10 }}>{props.title}</Text>
            </View>
        </View>
    )
}

export default BlockImage