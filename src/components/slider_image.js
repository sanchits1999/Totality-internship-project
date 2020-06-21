import React from "react"
import { View, Image, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const SliderImage = React.forwardRef((props, ref) => {

    //console.log(ref)

    return (
        <View style={{ height: 300, width: 300, marginLeft: 20, borderRadius: 20 }}>
            <View style={{ flex: 1, borderRadius: 20 }}>
                <Image ref={ref} source={props.uri} style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 20 }} />
            </View>
            <View style={{ position: "absolute", zIndex: 100, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", borderRadius: 20 }}>
                <View style={{ width: "100%", marginTop: "auto", marginLeft: 20 }}>
                    <LinearGradient colors={['#4efdb8', '#6dff74', '#cbff6b']} style={{ width: 80, borderRadius: 5 }}>
                        <View style={{ backgroundColor: "transparent", borderRadius: 5, alignItems: "center", justifyContent: "center", width: 80 }}>
                            <Text style={{ color: "#000000", fontSize: 10, fontWeight: "700", marginVertical: 3 }}>{props.category}</Text>
                        </View>
                    </LinearGradient>
                    <View style={{ marginTop: 3 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "#e3e3e3", letterSpacing: 0.7 }}>{props.title}</Text>
                    </View>
                    <View style={{ marginTop: 3, marginBottom: 20 }}>
                        <Text style={{ fontSize: 12, fontWeight: "300", color: "#c2c2c2", letterSpacing: 0.6 }}>{props.season}</Text>
                    </View>
                </View>
            </View>
        </View>
    )

}
)

export default SliderImage