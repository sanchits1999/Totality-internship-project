import React, { useRef, useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView, StatusBar, TextInput, Image, Dimensions, Animated, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import SliderImage from "../components/slider_image"
import Slider2Image from "../components/slider2_image"
import BlockImage from "../components/block_images"
import FeaturedImage from "../components/featured_images"
import { LinearGradient } from "expo-linear-gradient"
import ShowDetails from "./ShowDetails"

const Home = () => {


    const img1 = useRef(null)
    const img2 = useRef(null)
    const img3 = useRef(null)
    const destImage = useRef(null)
    const [activeImage, setactiveImage] = useState(null)
    const [show, setshow] = useState(false)
    let oldPosition = {}
    let position = useRef(new Animated.ValueXY()).current
    let dimensions = useRef(new Animated.ValueXY()).current
    let animation = new Animated.Value(0)
    let activeImageStyle = null
    let AnimatedOpc = useRef(new Animated.Value(1)).current
    const scrollY = useRef(new Animated.Value(0)).current

    let AnimatedOpacity1 = scrollY.interpolate({
        inputRange: [0, 30],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    let AnimatedOpacity2 = scrollY.interpolate({
        inputRange: [30, 31],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    const { height, width } = Dimensions.get("screen")

    const OpenImage = (img) => {

        setshow(true)

        img.current.measure((x, y, width, height, pageX, pageY) => {
            oldPosition.x = pageX
            oldPosition.y = pageY
            oldPosition.width = width
            oldPosition.height = height


            position.setValue({
                x: pageX,
                y: pageY
            })

            dimensions.setValue({
                x: width,
                y: height
            })

        })

        setactiveImage(img)

        console.log("dest")
        destImage.current.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {

            Animated.parallel([
                Animated.timing(position.x, {
                    toValue: dPageX,
                    duration: 100
                }),
                Animated.timing(position.y, {
                    toValue: dPageY,
                    duration: 100
                }),
                Animated.timing(dimensions.x, {
                    toValue: dWidth,
                    duration: 100
                }),
                Animated.timing(dimensions.y, {
                    toValue: dHeight,
                    duration: 100
                }),
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 100
                })
            ]).start(() => {
                setshow(false)
            })
        })
    }

    const CloseImage = () => {
        setactiveImage(null)
        setshow(false)
    }

    activeImageStyle = {
        width: dimensions.x,
        height: dimensions.y,
        left: position.x,
        top: position.y
    }


    console.log("hey1")


    return (
        <View style={{ flex: 1, backgroundColor: "#110c10", alignItems: "center" }}>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <Animated.View style={{ width: "90%", height: 60, position: "absolute", zIndex: 100, top: 60, opacity: AnimatedOpacity1, backgroundColor: "transparent", borderRadius: 15 }}>
                <LinearGradient colors={['#58ac92', '#cafd32', '#a921b3']} style={{ width: "100%", height: "100%", padding: 0.5, borderRadius: 15 }}>
                </LinearGradient>
            </Animated.View>
            <Animated.View style={{ width: "89.9%", height: 58, position: "absolute", zIndex: 100, top: 61, flexDirection: "row", alignItems: "center", borderRadius: 15, backgroundColor: "#110c10", opacity: AnimatedOpacity2 }}>
                <Animated.View style={{ width: "100%", height: "100%", flexDirection: "row", alignItems: "center", borderRadius: 15, backgroundColor: "#110c10", opacity: AnimatedOpacity1 }}>
                    <AntDesign name="search1" size={22} color="#6b6569" style={{ marginLeft: 20 }} />
                    <TextInput placeholder="search" placeholderTextColor="#6b6569" style={{ color: "#6b6569", fontSize: 18, flex: 1, marginLeft: 10 }} />
                </Animated.View>
            </Animated.View>
            <ScrollView style={{ flex: 1 }} scrollEventThrottle={16} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}>
                <View style={{ marginBottom: 80 }}>
                    <View style={{ marginTop: 160, marginLeft: 20, marginBottom: 20 }}>
                        <Text style={{ fontSize: 19, fontWeight: "700", color: "#ffffff" }}>Shows for you</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
                            <TouchableOpacity onPress={() => { OpenImage(img1) }}>
                                <SliderImage ref={img1} uri={require("../../assets/dj.jpg")} category="Team Battle" title="Singing Stars" season="Season 1" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { OpenImage(img2) }}>
                                <SliderImage ref={img2} uri={require("../../assets/singing.jpg")} category="Team Battle" title="Rising Stars" season="Season 3" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { OpenImage(img3) }}>
                                <SliderImage ref={img3} uri={require("../../assets/dancing.jpg")} category="Team Battle" title="Battle of Queens" season="Season 4" />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 70, marginLeft: 20, marginBottom: 20 }}>
                        <Text style={{ fontSize: 19, fontWeight: "700", color: "#ffffff" }}>Trending right now</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: 10, paddingRight: 20 }}>
                            <Slider2Image uri={require("../../assets/slider2.jpg")} title="Hip-Hop Kings" />
                            <Slider2Image uri={require("../../assets/slider1.jpg")} title="Remix Battle" />
                            <Slider2Image uri={require("../../assets/silder3.jpg")} title="Top of the top" />
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 70, marginLeft: 20, marginBottom: 20 }}>
                        <Text style={{ fontSize: 19, fontWeight: "700", color: "#ffffff" }}>Live team battles</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, height: 240 }}>
                        <View style={{ flex: 1 }}>
                            <BlockImage uri={require("../../assets/block1.jpg")} title="Rising Stars S1" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <BlockImage uri={require("../../assets/block2.jpg")} title="Dance Heroes S8" />
                        </View>
                    </View>
                    <View style={{ marginTop: 70, marginLeft: 20, marginBottom: 20 }}>
                        <Text style={{ fontSize: 19, fontWeight: "700", color: "#ffffff" }}>Featured performances</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, height: width }}>
                        <View style={{ flexDirection: "row", width: "100%", flex: 1, marginBottom: 20 }}>
                            <FeaturedImage uri={require("../../assets/fp1.jpg")} />
                            <FeaturedImage uri={require("../../assets/slider1.jpg")} />
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", flex: 1 }}>
                            <FeaturedImage uri={require("../../assets/singing.jpg")} />
                            <FeaturedImage uri={require("../../assets/dancing.jpg")} />
                        </View>
                    </View>
                </View>
            </ScrollView>


            {!show ? null : <Animated.View style={[{ position: "absolute", zIndex: 3000, opacity: AnimatedOpc }, activeImageStyle]}>
                <Animated.View style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}>
                    <Image source={require("../../assets/dj.jpg")} style={{ flex: 1, width: null, height: null, resizeMode: "cover" }} />
                </Animated.View>
                <Animated.View style={{ position: "absolute", zIndex: 100, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", borderRadius: 20, opacity: AnimatedOpacity1 }}>
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
            </Animated.View>}

            <View style={[StyleSheet.absoluteFill, { zIndex: 2000, opacity: activeImage ? 1 : 0 }]}
                pointerEvents={activeImage ? "auto" : "none"}>
                <ShowDetails ref={destImage} onClose={() => CloseImage()} animate={activeImage ? true : false} />
            </View>

        </View >
    )
}


export default Home