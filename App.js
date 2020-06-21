import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation"
import { Image, View } from "react-native"
import React, { useEffect } from "react"
import { Entypo, FontAwesome } from '@expo/vector-icons'
import Home from "./src/screens/Home"
import { LinearGradient } from "expo-linear-gradient"
import MaskedView from '@react-native-community/masked-view'



const bottomNav = createBottomTabNavigator({
	Explore: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => {
				return (<Entypo name="home" size={26} color={tintColor} />)
				{/*<MaskedView
					style={{ flex: 1, flexDirection: "row" }}
					maskElement={<View style={{ justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "transparent" }}>
						<Entypo name="home" size={26} color="white" />
					</View>}>
					<LinearGradient
						colors={tintColor === "white" ? ['#58ac92', '#cafd32', '#a921b3'] : ['#6b696c', '#6b696c', '#6b696c']}
						style={{ flex: 1 }}
					/>
				</MaskedView>*/}

			}
		}
	},
	Saved: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => {
				return (<MaskedView
					style={{ flex: 1, flexDirection: "row" }}
					maskElement={<View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
						<Entypo name="circle-with-plus" size={28} color={tintColor} />
					</View>}>
					<LinearGradient
						colors={tintColor === "white" ? ['#50ffba', '#cafd32', '#a921b3'] : ['#6b696c', '#6b696c', '#6b696c']}
						style={{ flex: 1 }}
					/>
				</MaskedView>)
			}
		}
	},
	Trips: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => {
				return (<MaskedView
					style={{ flex: 1, flexDirection: "row" }}
					maskElement={<View style={{ justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "transparent" }}>
						<FontAwesome name="heart" size={24} color={tintColor} />
					</View>}>
					<LinearGradient
						colors={tintColor === "white" ? ['#50ffba', '#cafd32', '#a921b3'] : ['#6b696c', '#6b696c', '#6b696c']}
						style={{ flex: 1 }}
					/>
				</MaskedView>)
			}
		}
	},
	Inbox: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => {
				return (<MaskedView
					style={{ flex: 1, flexDirection: "row" }}
					maskElement={<View style={{ justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "transparent" }}>
						<FontAwesome name="user" size={26} color={"white"} />
					</View>}>
					<LinearGradient
						colors={tintColor === "white" ? ['#50ffba', '#cafd32', '#a921b3'] : ['#6b696c', '#6b696c', '#6b696c']}
						style={{ flex: 1 }}
					/>
				</MaskedView>)
			}
		}
	}
}, {
	tabBarOptions: {
		showLabel: false,
		activeTintColor: "white",
		inactiveTintColor: "grey",
		style: {
			backgroundColor: "rgba(17,12,16,0.8)",
			borderTopWidth: 0,
			elevation: 0,
			height: 60,
			position: "absolute"
		}
	}
})



export default createAppContainer(bottomNav)
