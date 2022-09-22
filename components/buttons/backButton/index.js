import {View, TouchableOpacity, Image} from 'react-native';
import buttonStyle from './backButton.style';
import * as BackButtonHandler from "../../../navigation/hardwareBackHandler";

export default function BackButton ({ white }) {
    const imageSource = white ? require("@@assets/backButtonWhite.png") : require("@@assets/backButtonBlack.png")
    return (
        <TouchableOpacity onPress={() => BackButtonHandler.handleBack()}>
            <View style={buttonStyle.container}>
                <Image source={imageSource} style={buttonStyle.image}/>
            </View>
        </TouchableOpacity>
    );
}
