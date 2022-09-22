import { SafeAreaView, Text, View, Image } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Button } from "@@components"
import style from "./style"

export default function Conform({ navigation, route }) {

    let { followingScreen, text, functionToCall, config, params } = route.params;

    return (
        <SafeAreaView style={ style.container }>
            <StatusBar style="auto"/>
            <View style={ style.imageContainer }>
                <Image style={ style.image } source={ require("@@assets/drawings/person1.png") }/>
            </View>
            <Text style={ style.text }> { text } </Text>
            <View style={ style.buttonsContainer }>
                <View style={ style.buttonContainer }>
                    <Button title={ "Yes" } onPress={ () => followingScreen ? navigation.navigate(followingScreen, config) : functionToCall.apply(null, params) }/>
                </View>
                <View style={ style.buttonContainer }>
                    <Button title={ "No" } onPress={ () => navigation.goBack() }/>
                </View>
            </View>
        </SafeAreaView>
    )
}
