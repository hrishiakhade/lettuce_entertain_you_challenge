import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FONT_SIZES, COLORS, APP_STRINGS } from "../utils/constants";
import { RadioButton } from 'react-native-paper';


export const getQuestionText = (text) => {
    return (
        <Text style={styles.question}>{text}</Text>
    );
}

export const getButton = (isLastQuestion, handleNext, setOption, points) => {
    const buttonText = isLastQuestion ? APP_STRINGS.submit_button : APP_STRINGS.next_button;
    const buttonColor = points ? COLORS.secondary : COLORS.disabled;
    const buttonOpacity = points ? 1 : 0.6;

    const handlePress = () => {
        setOption();
        handleNext(points);
    };

    return (
        <Pressable
            style={({ pressed }) => [{
                opacity: pressed ? 0.9 : 1,
                backgroundColor: buttonColor,
                transform: [{ scale: pressed ? 0.95 : 1 }]
            }, styles.buttonStyle]}
            onPress={handlePress}
            disabled={!points}
        >
            <Text style={[styles.buttonText, { opacity: buttonOpacity }]}>
                {buttonText?.toUpperCase()}
            </Text>
        </Pressable>
    );
};



export const Cards = ({ questionData, isLastQuestion, handleNext }) => {
    const [option, setOption] = React.useState();

    return (
        <View style={styles.container}>
            {getQuestionText(questionData?.question?.toUpperCase())}
            <View style={styles.separator} />
            <RadioButton.Group onValueChange={value => setOption(value)} value={option}>
                {questionData?.options.map((option, index) => {
                    return (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <RadioButton.Item
                                label={option.text}
                                value={index}
                                position="leading"
                                labelStyle={styles.radioText}
                                color={COLORS.secondary}
                            />
                        </View>
                    );
                })}
            </RadioButton.Group>
            {getButton(isLastQuestion, handleNext, setOption, questionData?.options[option]?.points)}
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        borderWidth: 5,
        borderColor: COLORS.secondary,
        padding: 20,
        paddingBottom: 30,
        marginHorizontal: 20,
        minWidth: 300
    },
    question: {
        fontSize: FONT_SIZES.medium,
        fontWeight: "600",
        color: COLORS.primary,
        textAlign: 'center'
    },
    separator: {
        marginVertical: 20,
        height: 4,
        backgroundColor: COLORS.secondary
    },
    radioText: {
        fontSize: FONT_SIZES.medium,
        color: COLORS.primary,
        textAlign: 'left',
        marginLeft: 5
    },
    buttonStyle: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        position: 'absolute',
        bottom: -25,
        alignSelf: 'center',
        zIndex: 1
    },
    buttonText: {
        fontSize: FONT_SIZES.medium,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'center'
    }

});