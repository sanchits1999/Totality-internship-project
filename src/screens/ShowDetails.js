import React, { useState, useRef } from "react"
import { View, Text, ScrollView, Image, Dimensions, TouchableWithoutFeedback, Animated } from "react-native"
import Videos from "../components/videos"
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient"

const ShowDetails = React.forwardRef((props, ref) => {

    const { height, width } = Dimensions.get("screen")
    const [active, setactive] = useState("videos")
    const marginLeft = useRef(new Animated.Value(0)).current
    const [show1, setshow1] = useState(false)
    const scroll = useRef(null)


    const scrollY = useRef(new Animated.Value(0)).current

    if (props.animate) {
        Animated.timing(marginLeft, {
            toValue: 20,
            duration: 1000
        }).start(() => {
            if(!show1){
            setshow1(true)
            }
        })

    }

    if (!props.animate) {
        Animated.timing(marginLeft, {
            toValue: 0,
            duration: 1
        }).start(() => {
            if(show1){
            setshow1(false)
            scroll.current.scrollTo({x : 0 , y : 0 , animated : true})
            }
        })

    }

    let AnimatedOpacity1 = scrollY.interpolate({
        inputRange: [0, height / 1.6],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    let bgcolor = scrollY.interpolate({
        inputRange: [height / 1.6 - 200, height / 1.6 - 190, height / 1.6 - 180, height / 1.6 - 170, height / 1.6 - 160, height / 1.6 - 150, height / 1.6 - 140, height / 1.6 - 130, height / 1.6 - 120, height / 1.6 - 110, height / 1.6 - 100],
        outputRange: ["rgba(0,0,0,0)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.8)", "rgba(0,0,0,0.9)", "rgba(0,0,0,1)"],
        extrapolate: "clamp"
    })

    let AnimatedOpacity2 = scrollY.interpolate({
        inputRange: [height / 1.6 - 150, height / 1.6 - 100],
        outputRange: [0, 1],
        extrapolate: "clamp"
    })

    let mLeft = scrollY.interpolate({
        inputRange: [0, height / 1.6 - 100],
        outputRange: [0, (width - 240) / 2],
        extrapolate: "clamp"
    })

    let MarginTop = scrollY.interpolate({
        inputRange: [0, height / 1.6 - 100],
        outputRange: [height / 1.6, 100],
        extrapolate: "clamp"
    })

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={{ position: "absolute", zIndex: 1000, top: 0, left: 0, right: 0, width: "100%", height: 100, backgroundColor: bgcolor, opacity: 1, flexDirection: "row" }}>
                <TouchableWithoutFeedback onPress={() => { props.onClose() }}>
                    <Animated.View style={{ width: 34, alignSelf: "center", height: 34, borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.4)", alignSelf: "center", marginLeft: marginLeft, marginTop: 25 }}>
                        <Entypo name="cross" size={24} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <Animated.View style={{ alignSelf: "center", flex: 4, opacity: AnimatedOpacity2 }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "#ffffff", alignSelf: "center", marginTop: 25 }}>Singing Stars</Text>
                </Animated.View>
                <Animated.View style={{ alignSelf: "center", marginRight: marginLeft, justifyContent: "center", alignItems: "center", marginTop: 25, width: 34, opacity: AnimatedOpacity2 }}>
                    <Ionicons name="md-arrow-dropdown" size={28} color="white" />
                </Animated.View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", zIndex: 1001, width: "100%", height: 60, backgroundColor: "#000000", marginTop: MarginTop }}>
                <Animated.View style={{ height: "100%", flexDirection: "row", width: 240, marginLeft: mLeft }}>
                    <TouchableWithoutFeedback onPress={() => { setactive("videos") }}>
                        <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 12, fontWeight: "700", color: active === "videos" ? "#ffffff" : "#6b6569", marginHorizontal: 20 }}>Videos</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { setactive("about") }}>
                        <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 12, fontWeight: "700", color: active === "about" ? "#ffffff" : "#6b6569", marginHorizontal: 20 }}>About</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { setactive("prizes") }}>
                        <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 12, fontWeight: "700", color: active === "prizes" ? "#ffffff" : "#6b6569", marginHorizontal: 20 }}>Prizes</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </Animated.View>
            <ScrollView ref={scroll} style={{ flex: 1, backgroundColor: "#110c10" }} scrollEventThrottle={16} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}>
                <Animated.View style={{ width: "100%", height: height / 1.6, opacity: AnimatedOpacity1, backgroundColor: "#000000" }}>
                    <Image ref={ref} source={show1 ? require("../../assets/dj.jpg") : null} style={{ flex: 1, width: null, height: null, resizeMode: "cover" }} />
                </Animated.View>
                <Animated.View style={{ position: "absolute", zIndex: 100, width: "100%", height: height / 1.6, backgroundColor: "rgba(0,0,0,0.4)", borderRadius: 20, opacity: AnimatedOpacity1 }}>
                    <View style={{ width: "100%", marginTop: "auto", marginLeft: 20 }}>
                        <LinearGradient colors={['#4efdb8', '#6dff74', '#cbff6b']} style={{ width: 80, borderRadius: 5 }}>
                            <View style={{ backgroundColor: "transparent", borderRadius: 5, alignItems: "center", justifyContent: "center", width: 80 }}>
                                <Text style={{ color: "#000000", fontSize: 10, fontWeight: "700", marginVertical: 3 }}>Team Battle</Text>
                            </View>
                        </LinearGradient>
                        <View style={{ marginTop: 3 }}>
                            <Text style={{ fontSize: 24, fontWeight: "700", color: "#e3e3e3", letterSpacing: 0.7 }}>Singing Stars</Text>
                        </View>
                        <View style={{ marginTop: 3, marginBottom: 40 }}>
                            <Text style={{ fontSize: 14, fontWeight: "300", color: "#c2c2c2", letterSpacing: 0.6 }}>Season 1</Text>
                        </View>
                    </View>
                </Animated.View>

                <View style={{ Width: "100%", marginTop: 60 }}>
                    {active === "videos" ? <Videos /> : null}
                    {active === "about" ? <Videos /> : null}
                    {active === "prizes" ? <Videos /> : null}
                </View>
            </ScrollView>
        </View>
    )
})

export default ShowDetails