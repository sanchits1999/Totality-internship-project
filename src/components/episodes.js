import React from "react"
import { View, Text, Image, Picker } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const Episodes = (props) => {

    return (
        <View style={{ marginHorizontal: 20, marginTop: props.mtop }}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#a4a4a4" }}>Ep {props.ep}: Introduction</Text>
            <Text style={{ fontSize: 12, fontWeight: "700", color: "#6b696c", marginTop: 5, paddingRight: 20, letterSpacing: 0.3 }}>Introducing Team A and Team B for the show, checkout their cool introduction in their own style</Text>
            <View style={{ width: "100%", height: 200, flexDirection: "row", marginTop: 30, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 1, borderRadius: 20, height: "100%", marginRight: 3 }}>
                    <Image source={require("../../assets/fp1.jpg")} style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 20, width: "100%" }} />
                </View>
                <View style={{ flex: 1, borderRadius: 20, height: "100%", marginLeft: 3 }}>
                    <Image source={require("../../assets/singing.jpg")} style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 20, width: "100%" }} />
                </View>
                <View style={{ width: "100%", height: "100%", position: "absolute", zIndex: 100, justifyContent: "center", alignItems: "center" }}>
                    <MaterialIcons name="play-circle-outline" size={50} color="white" />
                </View>
            </View>
        </View>
    )
}

export default Episodes