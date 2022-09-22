import { View, Image, Text, SafeAreaView } from 'react-native';
import style from './personButton.style';

export default function PersonButton ({ title, color }) {
    let imageSource = require("@@assets/member.png");
    let textColor = "white";

    switch (color) {
        case "black":
            imageSource = require("@@assets/hats/black.png");
            textColor = "white";
            break;
        case "white":
            imageSource = require("@@assets/hats/white.png");
            textColor = "black";
            break;
        case "green":
            imageSource = require("@@assets/hats/green.png");
            textColor = "black";
            break;
        case "blue":
            imageSource = require("@@assets/hats/blue.png");
            textColor = "black";
            break;
        case "red":
            imageSource = require("@@assets/hats/red.png");
            textColor = "black";
            break;
        case "yellow":
            color = "#F6FE8296"
            imageSource = require("@@assets/hats/yellow.png");
            textColor = "black";
            break;
        default:
            imageSource = require("@@assets/member.png");
            color = "black";
            textColor = "white";
            break;
    }

    return (
        <SafeAreaView style={style.buttonContainer} backgroundColor={"white"} borderColor={color}>
            <Text color={textColor} style={style.text}>{title}</Text>
            <Image source={imageSource} style={style.image} />
        </SafeAreaView>
    );
}
