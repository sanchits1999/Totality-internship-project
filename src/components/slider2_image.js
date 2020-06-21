import React from "react"
import { View, Image, Text } from "react-native"

const Slider2Image = (props) => {
    return (
        <View style={{ flexDirection: "column", marginLeft: 10, }}>
            <View style={{ height: 140, width: 140, borderRadius: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image source={props.uri} style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 10 }} />
                </View>
            </View>
            <View style={{marginBottom : 10}}>
                <Text style={{ fontSize: 12, color: "#dddddd", fontWeight: "700", left: 10, top: 5 }}>{props.title}</Text>
            </View>
        </View>
    )
}

export default Slider2Image