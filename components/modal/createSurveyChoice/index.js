import {View, Text, TextInput, Keyboard, TouchableWithoutFeedback} from "react-native";
import { useEffect, useState } from "react";
import ChoiceButton from "../../buttons/choiceButton";
import style from "./createSurveyChoiceModal.style";
import Modal from "react-native-modal";
import * as HttpClient from "../../../navigation/httpClient";

export default function CreateSurveyChoiceModal({ addChoice, editChoice, onRequestClose, itemId, title, text, choiceItem, ...rest }) {

    useEffect(() => {
        setNewChoice(text)
    }, [text])

    const [newChoice, setNewChoice] = useState(text);

    function getNewChoice() {
        return { id: ~~(Math.random()*10000), title: newChoice };
    }

    function submitChoice() {
        if (newChoice.length == 0) {
            alert("Please type in an option first!");
            return;
        }
        if (text) {
            editChoice(getNewChoice());
            setNewChoice(text);
        } else if (newChoice) {
            addChoice(getNewChoice())
            setNewChoice(text);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Modal
            // transparent={true}
            onBackdropPress={onRequestClose}
            hasBackdrop={true}
            backdropColor={"black"}
            backdropOpacity={1.0}
            style={{ margin: 0 }}
            onRequestClose={onRequestClose}
            {...rest}>
            <View style={style.container}>
                <View style={style.innerContainer}>
                    <Text style={style.text}>{ text ? "Edit option" : "Add option" }</Text>
                    <TextInput
                        onChangeText={choice => setNewChoice(choice)}
                        multiline={true}
                        placeholder={"Option"}
                        style={style.textInput}
                        value={newChoice}
                        maxLength={100}
                    />
                    <View style={style.buttonContainer}>
                        <ChoiceButton title={"Cancel"} white={true} onPress={() => { onRequestClose(); setNewChoice(text); }}/>
                        <ChoiceButton title={"Ok"} white={true} onPress={submitChoice}/>
                    </View>
                </View>
            </View>
        </Modal>
        </TouchableWithoutFeedback>
    )
}
