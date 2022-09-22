import * as Navigation from "./navigation";
import {BackHandler} from "react-native";
import * as HttpClient from "./httpClient";

export function handleBack() {
    console.log("current Route: " + Navigation.getCurrentRouteName())
    if (Navigation.getCurrentRouteName() === "Main") {
        Navigation.navigate(
            "Index",
            { message: "Do you want to leave the team?", functionToCall: HttpClient.leaveMeeting }
        )
        return true;
    } else if (Navigation.getCurrentRouteName() === "StartScreen") {
        BackHandler.exitApp();
        return true;
    }

    Navigation.goBack();
    return true;
}
