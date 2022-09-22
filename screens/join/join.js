import { SafeAreaView, View, Image, TextInput } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Button } from "@@components"
import style from "./style"
import { useState } from "react"
import * as HttpClient from "../../navigation/httpClient"

export default function Join({ route }) {

    const { meetingId } = route.params
    const [memberName, setMemberName] = useState("")

    return (
        <SafeAreaView style={ style.container }>
            <StatusBar style="auto"/>
            <View style={ style.imageContainer }>
                <Image style={ style.image } source={ require("@@assets/drawings/person2.png") }/>
            </View>
            <TextInput
                onChangeText={ value => value ? setMemberName(value) : setMemberName("") }
                value={ memberName }
                placeholder={ "Name" }
                multiline={ true }
                numberOfLines={ 1 }
                maxLength={ 30 }
                style={ style.text }
            />
            <View style={ style.buttonContainer }>
                <View style={ style.button }>
                    <Button
                        title={ "Join" }
                        onPress={ () => memberName.length < 2 || memberName.length > 30 ?
                            alert("Please insert a name with at least 2 characters and a maximum of 30 characters") :
                            HttpClient.joinMeeting(meetingId, memberName) }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
