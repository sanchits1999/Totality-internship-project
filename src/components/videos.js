import React from "react"
import { View, Text, Image, Picker} from "react-native"
import Episodes from "../components/episodes"
import {Ionicons} from "@expo/vector-icons"



const Videos = (props) => {

    return (
        <View>
            <View style={{ width: 120, marginLeft: 20, backgroundColor: "rgba(255,255,255,0.1)", flexDirection : "row" , justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 30 }}>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#ffffff", marginVertical: 10, marginRight : 8 , borderRadius: 10 }}>Season 1</Text>
                <Ionicons name="md-arrow-dropdown" size={24} color="white" />
            </View>
            <View style={{marginBottom : 80}}>
                <Episodes ep="1" mtop={40}/>
                <Episodes ep="2" mtop={80}/>
                <Episodes ep="3" mtop={80}/>
            </View>
        </View>
    )
}

export default Videos